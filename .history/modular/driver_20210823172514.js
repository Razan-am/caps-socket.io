'use strict';

const faker = require('faker');
const clientIo = require('socket.io-client');

let host = 'http://localhost:3000/driver';

const driverConnection = clientIo.connect(host);

driverConnection.on('delivered',payload =>{
     payload = {
        event:'delivered',
        time:new Date().toLocaleDateString(),
        payload
    }
    setTimeout(()=>{
        console.log('DRIVER: delivered up',payload.payload.orderId);
        console.log('VENDOR: Thank you for delivering',payload.payload.orderId);
        console.log('Event',payload);
    },3000)
})