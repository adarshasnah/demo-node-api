const express = require('express'),
    bodyparser = require('body-parser'),
    logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(bodyparser.json());

app.get('/', (req, res) => res.send('Welcome to Demo Node API'));

app.listen(3000, () => console.log('Express is listening on port 3000'));