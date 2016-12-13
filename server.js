'use strict';
const Dgram = require('dgram');
const server = Dgram.createSocket('udp4');
const PORT = require('./config').port;

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`Message: ${msg}`);
  console.log(`Message (toString): ${msg.toString()}`);
  console.log(`rinfo: ${JSON.stringify(rinfo)}`);
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(PORT);
