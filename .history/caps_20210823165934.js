'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;
const io = require('socket.io')(port);

const vendoreRoute = io.of('/vendor');
const driverRoute = io.of('/driver');

vendoreRoute.on('connection',(socket)=>{
    console.log('Connect To vendor:',socket.id);
})