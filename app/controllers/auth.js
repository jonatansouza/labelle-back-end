/**
 * Created by victor on 17/07/15.
 */

module.exports = function(app) {

  var controller = {};

  controller.loginForm = function(req, res) {
    res.render('auth/login', {
      message: req.flash('error')
    });
  };

  controller.logout = function(req, res) {
    req.logout();
    res.redirect('/');
  };


  return controller;

};
