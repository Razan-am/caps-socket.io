'use strict';

const faker = require('faker');
const clientIo = require('socket.io-client');

let host = 'http://localhost:3000';

const vendorConnection = clientIo.connect(host);

vendorConnection.on('pickup',payload =>{
    let obj={
        event:'pickup',
        time: new Date().toLocaleDateString(),
        payload
    }
   console.log('Event',obj)

    setTimeout(()=>{
        console.log('DRIVER: picked up',obj.payload.orderId);
        events.emit('in-transit',payload);
    },1000)
})