const express = require('express');
const path = require('path');

const app = express();


const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => {
    console.log(`Sever is listening at http://localhost:${PORT}`);
})