const express = require('express')
const app = express()
const spicedPg = require('spiced-pg')
const db = spicedPg(process.env.DATABASE_URL || require('./secrets.json').DATABASE_URL);
const multer = require('multer')
const uidSafe = require('uid-safe')
const path = require('path')
const bodyParser = require('body-parser')
const knox = require('knox')
const fs = require('fs')

if (process.env.NODE_ENV == 'production') {
    secrets = process.env
} else {
    secrets = require('./secrets.json')
}

const client = knox.createClient({
    key: secrets.AWS_KEY,
    secret: secrets.AWS_SECRET,
    bucket: 'spicedling'
})

const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/uploads');
    },
    filename: function (req, file, callback) {
      uidSafe(24).then(function(uid) {
          callback(null, uid + path.extname(file.originalname));
      });
    }
});

const uploader = multer({
    storage: diskStorage,
    limits: { filesize: 2097152 }
});

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))





app.get('/images', (req, res) => {
    const q = 'SELECT images.id, images.title, images.image_url AS "imageUrl", images.author FROM images'
    db.query(q,[])
        .then(results => {
            res.json(results.rows)
        })
})

app.get('/getImage/:imageId', (req, res) => {
    const q = 'SELECT images.id, images.title, images.image_url AS "imageUrl", images.author FROM images WHERE id = $1'
    const params = [ req.params.imageId ]

    db.query(q, params)
        .then(results => {
            console.log(results);
            res.json(results.rows[0])
        })
        .catch(err => console.log("There was an error in getImage GET route: ", err))
})

app.post('/upload-image', uploader.single('file'), (req, res) => {
    console.log("inside POST /upload-image", req.file)

    if (req.file) {

        const { user, title } = req.body;

        console.log("reight hererere!");

        const s3Request = client.put(req.file.filename, {
            'Content-Type': req.file.mimetype,
            'Content-Length': req.file.size,
            'x-amz-acl': 'public-read'
        });
        console.log("about to create stream", req.file.path);
        const readStream = fs.createReadStream(req.file.path);
        readStream.pipe(s3Request);

        s3Request.on('response', s3Response => {
            console.log("we are here");
            const wasSuccessful = s3Response.statusCode == 200;
            const q = 'INSERT INTO images (imageUrl, user, title) VALUES ($1, $2, $3)'
            const params = [ req.file.filename, user, title ]

            db.query(q, params)
            .then(() => {
                console.log(req.file.filename, wasSuccessful);
                res.json({ success: wasSuccessful });
            })
            .catch((err) => {
                console.log(err);
                res.json({ success: false });
            })
        });
    }
})




app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(process.env.PORT || 8080, () => {
    console.log("Listening on port 8080")
})
