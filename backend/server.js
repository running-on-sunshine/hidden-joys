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

let getOneItemQuery = (id) =>
    `SELECT * FROM items WHERE items.id = '${id}';`;

let getOneItem = (req, res) => {
    db.one(getOneItemQuery(req.params.id))
    .then(data => res.send({data}))
    .catch(err => res.send({data: 'Error'}))
};

let updateItemFoundStatusQuery = (item) =>
    `UPDATE items
    SET found = ${item.found}
    WHERE items.id = '${item.id}';
    `;

let updateItemFoundStatus = (req, res) => {
    db.query(updateItemFoundStatusQuery(req.body))
    .then(() => res.end())
};

let updateItemCommentQuery = (id, comment) =>
    `UPDATE items
    SET comment = '${comment}'
    WHERE items.id = '${id}';
    `;

let updateItemComment = (req, res) => {
    db.query(updateItemCommentQuery(req.body.id, req.body.comment))
    .then(() => res.end())
};

server.post('/items', addNewItem);
server.get('/items', getAllItems);
server.get('/items/:id', getOneItem);
server.put('/items/:id', updateItemFoundStatus);
server.put('/items/:id/comment', updateItemComment);

server.listen(5000);