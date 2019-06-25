const express = require('express');
const app = express();

const PORT = 3000;
const HOST = '127.0.0.1';

const dgram = require('dgram');
const server = dgram.createSocket('udp4');


app.get('/',(req,res,next)=>{

    res.write('<h1>Yo yo</h1>');
    res.write('<h2>Ths is hiashd</h2>')
    server.on('message', (msg,rinfo)=>{
        res.write(msg+'<br>');     
    });
});




app.listen(3000,()=>{
    server.on('listening', ()=>{
        const address = server.address();
        console.log('Udp server listening on' + address.address + ':' + address.port);
    });
    server.bind(PORT,HOST);
});