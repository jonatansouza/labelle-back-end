/**
 * Created by victor on 17/07/15.
 */
var passport = require('passport');

module.exports = function(app){

    var controller = app.controllers.auth;

    app.route('/login')
        .get(controller.loginForm)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        }));

    app.get('/logout', controller.logout);
};