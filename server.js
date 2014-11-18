var connect     = require('connect'),
    serveStatic = require('serve-static')
//path        = require('path');

//directory = path.resolve(__dirname, './dist/');

connect().use(serveStatic('./dist')).listen(9000);

console.log('Listening on port 80.');
