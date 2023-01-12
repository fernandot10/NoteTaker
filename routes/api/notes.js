const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../../helpers/fsUtils.js');


router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data)))
})


router.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
    .then ((data) => JSON.parse(data))
    .then((json) => {
        
        const result = json.filter((note) => note.id !== noteId);
        writeToFile('./db/db.json', result);

        res.json(`note ${noteId} deleted succesfully!`);
        console.log(`note ${noteId} deleted succesfully!`)
    });
});


router.post('/', (req, res) => {
    console.log('request received!')
    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
        const note = {
            title,
            text,
            id: uuidv4(),
        }


        readAndAppend(note, './db/db.json')
        res.json('New Note Added!')
    } else {
        res.error('Error!')
    }
});


module.exports = router;