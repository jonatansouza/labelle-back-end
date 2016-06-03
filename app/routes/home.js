var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = function(app) {

    var controller = app.controllers.home;

    //app.get('/', ensureLoggedIn('/login'), controller.index);
    app.get('/',controller.index);
    app.get('/bootstrap/createFirstUser', controller.createUser);
    app.get('/bootstrap/checkPwd', controller.testPasswordEncrypt);

};
