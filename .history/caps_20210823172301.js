'use strict';

require('dotenv').config();
const faker = require('faker');

const port = process.env.PORT || 3000;
const io = require('socket.io')(port);
const clientIo = require('socket.io-client');

const vendoreRoute = io.of('/vendor');
const driverRoute = io.of('/driver');


let host = 'http://localhost:3000';


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

const vendorConnection =io.connect(`${host}/vendor`);
const driverConnection =io.connect(`${host}/driver`);

vendorConnection.emit('store')
driverConnection.emit('client')