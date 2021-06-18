require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = {
    app
};