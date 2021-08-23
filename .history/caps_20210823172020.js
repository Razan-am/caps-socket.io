'use strict';

require('dotenv').config();
const faker = require('faker');

const port = process.env.PORT || 3000;
const io = require('socket.io')(port);

const vendoreRoute = io.of('/vendor');
const driverRoute = io.of('/driver');


let vendorhost = 'http://localhost:3000/vendor';
let driverhost = 'http://localhost:3000/driver';

let payload ={
    storeName: process.env.STORE_NAME,
    orderId: faker.datatype.number(),
    customerName: faker.name.findName(),
    address:  faker.address.direction()
}

vendoreRoute.on('connection',(socket)=>{
    console.log('Connect To vendor:',socket.id);
    socket.on('store',(payload)=>{
        vendoreRoute.emit('pickup',payload);
    });
})


vendoreRoute.on('connection',(socket)=>{
    console.log('Connect To vendor:',socket.id);
    socket.on('store',(payload)=>{
        vendoreRoute.emit('in-transit',payload);
    });
})

driverRoute.on('connection',(socket)=>{
    console.log('Connect To driver:',socket.id);
    socket.on('client',(payload)=>{
        driverRoute.emit('delivered',payload);
    });
})

vendorConnection =io.connect(`${host}/vendor`);
vendorConnection =io.connect(`${host}/driver`)