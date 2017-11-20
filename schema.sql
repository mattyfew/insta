DROP TABLE IF EXISTS images;

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    author VARCHAR (50),
    created TIMESTAMP
);


INSERT INTO images (title, author, image_url) VALUES ('The Alps', 'mattyfew', 'oSyxrshlwpE0iMqJxGfzHAK4GBsinrsH.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Bavaria in the Winter', 'paupaufowfow', 'FB494eYnJSJ60oYFrEfysnpX_Y6_sj8s.jpg');
INSERT INTO images (title, author, image_url) VALUES ('berlin_needle', 'mattyfew', '_XanAET9m_AKdrohT4qh24S9v44UPhMK.jpg');
INSERT INTO images (title, author, image_url) VALUES ('View from the Victory Tor', 'paupaufowfow', 'AQqyiFnlA341p0wyfqW8VIsl0e0cD8_A.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Mountains in Sydney', 'mattyfew', 'l-aWDqYNugurxegKuohVzQSAhBbuMc46.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Lost Somewhere', 'jfew', 'rqJx25zTHijzZhvdFT6pXYBuCzvqEmRR.jpg');
INSERT INTO images (title, author, image_url) VALUES ('In the middle', 'jfew', 'd8UOmYjXZ22jWRfMDhrPd-HsceqVSOTS.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Cliffs of Moher', 'jfew', 'qaol_zuQ0X41hR1YnSHCrNy3JgRGRVvM.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Just beyond the brush', 'mattyfew', 'jnliVmRi3CNWyE3tloKdp60qAYCQxcFO.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Majestic af', 'jfew', 'rt87PePqgtpnNKNCiWJUx8e2B6TJoAcn.jpg');
INSERT INTO images (title, author, image_url) VALUES ('On Fire', 'jfew', 'skdSt2tcJQ3KZIK6RvTOQKVG7AEvTQqf.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Nebulus', 'skrillex', 'YSsjzx-IeGAaoojWeVGLLy6_RcLcY1dg.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Dubrovnik', 'mattyfew', 'pEZDmoZtlJkO6ymJE8nMBfltVXbFYfKP.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Colorful Cottage', 'paupaufowfow', 'XskahmyfVfLdIHxoHufJN2NlEAdGoN3y.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Road in Germany', 'mattyfew', 'PMzqJnfRLk4MdO1T8emkGU3MdbVA1x96.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Krakow', 'skrillex', 'FQxiLVwXn9epDk2P5-NKGlsoIJNC9WwU.jpg');
INSERT INTO images (title, author, image_url) VALUES ('Lake Tahoe', 'Zoids', '8aTz4eAUb-hSZh9doxkR4XMjRvWcJQWG.jpg');
