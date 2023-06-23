const serverHttpAppExpress = require('http').createServer();
const io = require('socket.io')(serverHttpAppExpress, {
    cors: {
        origin: 'http://localhost:3000'
    }
});
//@ToDo change this file to typescript when websocke-server.js server refactor it to typescript.
const WebsocketEnum = {
    Connection: 'connection',
    Disconnect: 'disconnect',
    Update: 'update',
    NewIncomingMessage: 'newIncomingMessage',
};

let tot = 0;

const generatorOfTotalValue = (step,interval) => {
    setInterval(() => {
        tot = tot + step;
    }, interval);
}

generatorOfTotalValue(10,100);

io.on(WebsocketEnum.Connection, (socket) => {
    console.log('a user connected');
    socket.on(WebsocketEnum.Disconnect, () => {
        console.log('user disconnected');
    });

    socket.on(WebsocketEnum.Update, (msg) => {
        console.log('createdMessage: ', msg);
        socket.emit(WebsocketEnum.NewIncomingMessage, { message : `${tot}`});
    });

    socket.emit(WebsocketEnum.NewIncomingMessage, { message : `${tot}`});
    setInterval(() => {
        socket.emit(WebsocketEnum.NewIncomingMessage, { message : `${tot}`});
    }, 10000);
});

function startApp() {
    serverHttpAppExpress.listen(4300, () => console.log('Server has started'));
}

startApp();
//get some parts of the code from this: https://socket.io/get-started/chat
