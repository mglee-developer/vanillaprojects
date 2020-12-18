const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'src')));

const API_KEY = 'dSe8zC6MYwuewIkOwCHOno6KZNr1cuk1';
const TYPE = 'AP01';
app.use('/api', (req, res) => {
    const url = `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${API_KEY}&data=${TYPE}`;
    axios.get(url)
    .then((response) => {
        res.send(response.data);
    })
    .catch(error => console.log(error));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const query = req.body.currency_one;
    const url = `https://v6.exchangerate-api.com/v6/a4eae5b56a5ae8efdb454530/latest/${query}`;
    axios.get(url)
        .then((response) => {
            res.send(response.data);
        })
        .catch(error => {console.log(error)});
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => console.log(`server is running ${PORT}`));

module.exports = app;