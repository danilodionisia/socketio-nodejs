exports.socketControllerPublic = async (req, res) => {

    const socket = req.mySocket;

    try{
        const generalMsg = 'Essa é uma mensagem enviada para todos!';
        socket.socketSendPublicMessage(generalMsg);
    }catch(err){
        console.log(err);
    }     
    
    res.send('public message');
}

exports.socketControllerPrivate = async (req, res) => {

    const socket = req.mySocket;
    
    try{
        const privateMsg = 'Essa é uma mensagem privada!';
        socket.socketSendPrivateMessage(req.body.user, privateMsg);
    }catch(err){
        console.log(err);
    } 
    
    
    res.send('private message');
}


