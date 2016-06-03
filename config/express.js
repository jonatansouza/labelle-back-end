var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
//var passport = require('passport');
var flash = require('connect-flash');
var sassMiddleware = require('./sass-middleware');
//var multer  = require('multer'); //Usado para uploads, olhar documentação

module.exports = function(){
    var app = express();

    app.set('port', 3000);

    app.use(sassMiddleware());

    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    app.use(flash());
    app.use(cookieParser());
    app.use(session({secret: 'secret @_app' , resave: true, saveUninitialized: true}));
  

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .then('helpers')
        .into(app);

    return app;
};
