const express = require('express');
const path = require('path');
const fs = require("fs");

const app = express();


const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    fs.readFile('./data/task.js', (err, data) => {
        if(err) throw err; 
        data = JSON.parse(data.toString());
        return res.render('index', {data});

    });
})

app.post('/task', async (req, res) => {
    fs.readFile('./data/task.js', (err, data) => {
        if(err) throw err;

        data = JSON.parse(data.toString())

        data.push({
            task: req.body.text,
            deadline: new Date(req.body.dateTime).toLocaleString('en-US', {
                weekday: "short",
                month:'short',
                day: "numeric",
                year: 'numeric',
                hour: "numeric",
                minute: "numeric",
                hourCycle: "h12"
            })
        });

        data = JSON.stringify(data);

        fs.writeFile('./data/task.js', data, "utf8", (err) => {
            if(err) throw err;
            console.log("The file has been saved!");  
        })
        
    })
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Sever is listening at http://localhost:${PORT}`);
})