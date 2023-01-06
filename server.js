const express = require ('express');
const app = express();
const path = require ('path');


const apiRoutes = require ('./routes/apiRoutes.js');
const htmlRoutes = require ('./routes/htmlRoutes.js');


const PORT = process.env.PORT || 3001;


app.use (express.json());
app.use (express.urlencoded({ extended: true }));
app.use (express.static(' public '));


app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, () => {
    console.log(`listening in on PORT: ${PORT}`);
});


// // HOMEPAGE ROUTE 
// app.get('/', (req, res) => 
// res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // NOTES ROUTE
// app.get('/notes', (req, res) => 
// res.sendFile(path.join(__dirname, '/public/notes.html'))
// );

