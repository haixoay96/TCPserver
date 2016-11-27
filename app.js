var net = require('net');
var server = net.createServer();


server.on('connection', (socket) => {
    console.log('Connected!');
    socket.on('data', (data) => {
        console.log(data);
        console.log(data.toString());
        socket.write(data);
    });
    socket.on('end', ()=> {
        console.log('end!');
    });
});
server.on('error', (error) => {
    console.log('Have error');
});
server.listen(5000, () => {
    console.log('server running at port 5000!');
});
