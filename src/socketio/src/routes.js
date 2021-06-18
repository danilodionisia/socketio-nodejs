const router = require('express').Router();
const socketController = require('./modules/capsules/controller/socketController');

router.post('/public', (req, res) => {
    socketController.socketControllerPublic(req, res);   
});

router.post('/private', (req, res) => {
    socketController.socketControllerPrivate(req, res);   
});

module.exports = router;

