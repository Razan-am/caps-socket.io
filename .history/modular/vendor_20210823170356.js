'use strict';

const clientIo = require('socket.io-client');

let host = 'http://localhost:3000';

const vendorConnection = clientIo.connect(host);

vendorConnection.on('')