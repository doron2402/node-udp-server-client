'use strict';
const Dgram = require('dgram');
const buf1 = Buffer.from('Some ');
const buf2 = Buffer.from('bytes');
const PORT = require('./config').port;
const client = Dgram.createSocket('udp4');

console.log(`Sending Buffer: ${buf1}`);
console.log(`Sending Buffer: ${buf2}`);
client.send([buf1, buf2], PORT, 'localhost', (err) => {
  if (err) {
    console.error(err);
  }
  client.close();
});
