exports.socketControllerPublic = async (req, res) => {

    const socket = req.mySocket;

    try{
        socket.socketSendPublicMessage(req.body.message);
        res.status(200).json({msg: 'A public message was sent succesfully'});
    }catch(err){
        console.log(err);
        return res.status(500).json({error: err});
    }
}

exports.socketControllerPrivate = async (req, res) => {

    const socket = req.mySocket;
    
    try{
        socket.socketSendPrivateMessage(req.body.user, req.body.message);
        res.status(200).json({msg: 'A private message was sent succesfully'});
    }catch(err){
        console.log(err);
        return res.status(500).json({error: err});
    }    
}


