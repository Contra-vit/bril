const serverHttpAppExpress = require('http').createServer();
const io = require('socket.io')(serverHttpAppExpress, {
    cors: {
        origin: 'http://localhost:3000'
    }
});



let tot = 0;
setInterval(() => {
    // i ++;
    tot = tot + 10;
}, 100);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('update', (msg) => {
        console.log('createdMessage: ', msg);
        socket.emit('newIncomingMessage', { message : `${tot}`});
    });

    socket.emit('newIncomingMessage', { message : `${tot}`});
    setInterval(() => {
        socket.emit('newIncomingMessage', { message : `${tot}`});
    }, 10000);
});

function startApp() {
    serverHttpAppExpress.listen(4300, () => console.log('Server has started'));
}

startApp();
//get some parts of the code from this: https://socket.io/get-started/chat
