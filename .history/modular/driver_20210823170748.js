'use strict';

const faker = require('faker');
const clientIo = require('socket.io-client');

let host = 'http://localhost:3000';

const driverConnection = clientIo.connect(host);

driverConnection.on('pickup',payload =>{
    let obj = {
        event:'delivered',
        time:new Date().toLocaleDateString(),
        payload
    }
    setTimeout(()=>{
        console.log('DRIVER: delivered up',obj.payload.orderId);
        console.log('VENDOR: Thank you for delivering',obj.payload.orderId);
        console.log('Event',obj);
    },3000)
})