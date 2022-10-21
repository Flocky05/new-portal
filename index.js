const express = require('express')
const app = express();
const port = process.env.POR || 5000;

const cors = require('cors')
app.use(cors());
const categories = require('./data/Category/category.json');
const news = require('./news.json');

app.get('/', (req, res) => {
    res.send("News API is running Now!");
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    } else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.get('/news-category', (req, res) => {
    res.send(categories);
})
app.listen(port, () => {
    console.log('new server', port);
})