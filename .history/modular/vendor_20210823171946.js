'use strict';

const faker = require('faker');
const clientIo = require('socket.io-client');

let host = 'http://localhost:3000/vendor';

const vendorConnection = clientIo.connect(host);

vendorConnection.on('pickup',payload =>{
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

vendorConnection.on('in-transit',payload =>{
    let payload = {
        event:'in-transit',
        time:new Date().toLocaleDateString(),
        payload
    }
    console.log('Event',payload);
    events.emit('delivered',payload)
})