const http = require('http');
const socketio = require('socket.io');

class Socket {

    constructor(app, port){
        this.app = app;
        this.port = port;
        this.users = [];
        this.startSocketServer ();
        this.socketService();
    }

    startSocketServer (){
        this.server = http.createServer(this.app);
        this.io = socketio(this.server, {cors: {origin: '*'}});
        this.server.listen(this.port, () => {
            console.log(`Running on port: ${this.port}`);
        });        
    }

    socketService(){       
        
        this.io.on('connect', socket => {

             socket.on('username', username => {

                this.users[username] = socket.id;

                this.sendPrivate = (user, msg) => {
                    if(user){
                        socket.emit(user, msg);
                    }
                }
                
                this.socket = socket;
            }); 
        });
    }

    socketSendPublicMessage(msg){
        this.socket.emit('publicMessage', msg);
    }

    socketSendPrivateMessage(user, msg){
        this.sendPrivate(user, msg);
    }
    
}

module.exports = {
    Socket
};


