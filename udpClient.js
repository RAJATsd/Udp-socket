const PORT = 3000;
const HOST = '127.0.0.1';

const dgram = require('dgram');
const message = new Buffer('This is what I have done till now');

const client = dgram.createSocket('udp4')
client.send(message, 0, message.length, PORT,HOST,(err,bytes)=>{
    if (err) throw err;
    console.log('UDP message sent to'+ HOST+':'+PORT);
    client.close();
});