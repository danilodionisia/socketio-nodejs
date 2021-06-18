const socketServices = require('../services/socketServices');

exports.socketControllerPublic = (req, res) => {
    socketServices.socketControllerPublic(req, res);
}

exports.socketControllerPrivate = (req, res) => {
    socketServices.socketControllerPrivate(req, res);
}