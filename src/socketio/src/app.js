require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const {Socket} = require('./socket');
const socketPort = process.env.SOCKET_PORT || 3080;
const socket = new Socket(app, socketPort); 

const sendSocket = (req, res, next) => {
    req.mySocket = socket;
    return next();
};

app.use(sendSocket);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');



const routes = require('./routes');

app.use('/', routes);

app.get('/', (req, res) => {
    res.render('../src/socketio/src/views/home');
});

app.listen(port, () => {
    console.log(`API server running on port ${port}`);
});