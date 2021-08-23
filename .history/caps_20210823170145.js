'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;
const io = require('socket.io')(port);

const vendoreRoute = io.of('/vendor');
const driverRoute = io.of('/driver');

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