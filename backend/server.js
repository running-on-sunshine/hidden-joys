const express = require('express');
const pg = require('pg-promise')();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const db = pg(process.env.PG_URL);

let server = express();
server.use(bodyParser.json());
server.use(cors());

let addNewItemQuery = (itemObject) =>
    `INSERT INTO items (id, title, lat, lng, image, description)
     VALUES ('${itemObject.id}', '${itemObject.title}', ${itemObject.lat}, 
             ${itemObject.lng}, '${itemObject.image}', '${itemObject.description}');`;

let addNewItem = (req, res) => {
    console.log(req.body);
    db.query(addNewItemQuery(req.body))
    .then(() => res.end());
};

let getAllItemsQuery = () => `SELECT * FROM items;`;

let getAllItems = (req, res) => {
    db.query(getAllItemsQuery())
    .then(data => res.send({data}))
    .catch(err => res.send({error: err}))
};

server.post('/items', addNewItem);
server.get('/items', getAllItems);

server.listen(5000);