const express = require('express')
const app = express();
const port = process.env.POR || 5000;

const cors = require('cors')
app.use(cors());
const categories = require('./data/Category/category.json');

app.get('/', (req, res) => {
    res.send("News API is running Now!");
})

app.get('/news-category', (req, res) => {
    res.send(categories);
})
app.listen(port, () => {
    console.log('new server', port);
})