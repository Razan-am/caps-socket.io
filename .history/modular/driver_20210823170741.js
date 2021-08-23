'use strict';

const faker = require('faker');
const clientIo = require('socket.io-client');

let host = 'http://localhost:3000';

const driverConnection = clientIo.connect(host);

driverConnection.on('pickup',payload =>{
    let payload={
        event:'pickup',
        time: new Date().toLocaleDateString(),
        payload
    }
   console.log('Event',payload)

    setTimeout(()=>{
        console.log('DRIVER: picked up',payload.payload.orderId);
        events.emit('in-transit',payload);
    },1000)
})