const net = require('net');
const client = net.connect({
    host: '104.199.212.88',
    port: 5000
}, () => {
    // 'connect' listener
    console.log('connected to server!');
    client.write('world!\r\n');
});
client.on('data', (data) => {
    console.log(data.toString());
    //  client.end();
});
client.on('end', () => {
    console.log('disconnected from server');
});
