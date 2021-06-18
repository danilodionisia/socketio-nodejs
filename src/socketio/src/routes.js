const router = require('express').Router();
const {app} = require('./app');
const socketController = require('./modules/capsules/controller/socketController');

const {Socket} = require('./socket');
const socketPort = 3080;
const socket = new Socket(app, socketPort); 

const sendSocket = (req, res, next) => {
    req.mySocket = socket;
    return next();
};

router.use(sendSocket);

router.post('/public', (req, res) => {
    socketController.socketControllerPublic(req, res);   
});

router.post('/private', (req, res) => {
    socketController.socketControllerPrivate(req, res);   
});

module.exports = router;

