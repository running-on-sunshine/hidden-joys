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
    `INSERT INTO items (title, lat, lng, image, found_code)
     VALUES ('${itemObject.title}', ${itemObject.lat}, ${itemObject.lng}, 
             '${itemObject.image}', '${itemObject.found_code}') RETURNING *;`;

let addNewItem = (req, res) => {
    db.query(addNewItemQuery(req.body))
    .then(data => res.send(data))
    .catch(err => res.send(err))
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

let getItemByCodeQuery = (code) =>
    `SELECT * FROM items WHERE items.found_code = '${code}';`;

let getItemByCode = (req, res) => {
    db.one(getItemByCodeQuery(req.params.id))
    .then(data => res.send({data}))
    .catch(err => res.send({data: 'Error'}))
};

let updateItemFoundStatusQuery = (item) =>
    `UPDATE items
    SET item_found = ${item.found}
    WHERE items.id = '${item.id}';
    `;

let updateItemFoundStatus = (req, res) => {
    db.query(updateItemFoundStatusQuery(req.body))
    .then(() => res.end())
};

let updateItemCommentQuery = (id, comment) =>
    `UPDATE items
    SET found_comment = '${comment}'
    WHERE items.id = '${id}';
    `;

let updateItemComment = (req, res) => {
    db.query(updateItemCommentQuery(req.body.id, req.body.comment))
    .then(() => res.end())
};

let addNewHintQuery = (itemId, hint) =>
    `INSERT INTO hints (item_id, hint)
    VALUES (${itemId}, '${hint}');`;

let addHints = (req, res) => {
    req.body.hints.forEach(hint => {
        db.query(addNewHintQuery(req.body.itemId, hint.hint))
        .then(() => res.end())
    })
};

let getHiddenItemsQuery = () => `SELECT * FROM items WHERE item_found = false;`;

let getHiddenItems = (req, res) => {
    db.query(getHiddenItemsQuery())
    .then(data => res.send({data}))
    .catch(err => res.send({error: err}))
};

let getFoundItemsQuery = () => `SELECT * FROM items WHERE item_found = true;`;

let getFoundItems = (req, res) => {
    db.query(getFoundItemsQuery())
    .then(data => res.send({data}))
    .catch(err => res.send({error: err}))
};

let getItemHintsQuery = (itemId) => 
    `SELECT * FROM hints WHERE item_id = ${itemId};`;

let getItemHints = (req, res) => {
    db.query(getItemHintsQuery(req.params.id))
    .then(data => res.send({data}))
    .catch(err => res.send({data: 'Error', error: err}))
};

server.post('/items', addNewItem);
server.post('/hints', addHints);
server.get('/items', getAllItems);
server.get('/items/hidden', getHiddenItems);
server.get('/items/found', getFoundItems);
server.get('/items/:id', getOneItem);
server.get('/items/:id/hints', getItemHints);
server.get('/codes/:id', getItemByCode);
server.put('/items/:id/found', updateItemFoundStatus);
server.put('/items/:id/comment', updateItemComment);

server.listen(5000);