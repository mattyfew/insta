DROP TABLE IF EXISTS images;

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    author VARCHAR (50),
    created TIMESTAMP
);


-- INSERT INTO images (title, author, image_url) VALUES ('Berlin', 'mattyfew', 'hollie-harmsworth.jpg');
-- INSERT INTO images (title, author, image_url) VALUES ('cozy', 'paupaufowfow', 'iswanto-arif.jpg');
-- INSERT INTO images (title, author, image_url) VALUES ('Berlin', 'mattyfew', 'hollie-harmsworth.jpg');
-- INSERT INTO images (title, author, image_url) VALUES ('cozy', 'paupaufowfow', 'iswanto-arif.jpg');
-- INSERT INTO images (title, author, image_url) VALUES ('Berlin', 'mattyfew', 'hollie-harmsworth.jpg');
-- INSERT INTO images (title, author, image_url) VALUES ('cozy', 'paupaufowfow', 'iswanto-arif.jpg');
