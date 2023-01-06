const router = require ('express').Router();




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