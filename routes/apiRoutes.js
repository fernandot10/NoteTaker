const router = require ('express').Router();
const fs = require('fs');
const db = require('../db/db.json');
const uniqid = require('uniqid');


router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => 
    res.json(JSON.parse(data)))
})


router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));

        res.send(data)
    })
})

router.post('/api/notes', (req, res) => {
    let newNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err; 
        let newData = JSON.parse(data);

        newData.push(newNote);
        console.log(newData)

        fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => {

            res.send('Note added succesfully!');
        })
    });
})

module.exports = router;