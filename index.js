const server = require('./server');
var fs = require('fs');


fs.copyFile('copy/one.txt', 'copy/two.txt', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
});

server.start();


