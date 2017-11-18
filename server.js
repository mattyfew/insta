const express = require('express')
const app = express()
const spicedPg = require('spiced-pg')
const db = spicedPg('postgres:mattfewer:password@localhost:5432/insta');


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
    console.log("here");

    db.query(q, params)
        .then(results => {
            console.log(results);
            res.json(results.rows[0])
        })
        .catch(err => console.log("There was an error in getImage GET route: ", err))
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(process.env.PORT || 8080, () => {
    console.log("Listening on port 8080")
})
