var http = require('http');
var app = require('./config/express')();
require('./config/passport')(app);
require('./config/database')();

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server listen on port: '+ app.get('port'));
});