const express = require('express');
const pg = require('pg-promise')();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = pg('postgres://clint@localhost:5432/hidden-joys');

let server = express();
server.use(bodyParser.json());
server.use(cors());

let addNewItemQuery = (itemObject) =>
    `INSERT INTO items (id, title, lat, lng, image, description)
     VALUES ('${itemObject.id}', '${itemObject.title}', ${itemObject.lat}, 
             ${itemObject.lng}, '${itemObject.image}', '${itemObject.description}');`

let addNewItem = (req, res) => {
    console.log(req.body);
    db.query(addNewItemQuery(req.body))
    .then(() => res.end());
};    

server.post('/items', addNewItem);

server.listen(5000);