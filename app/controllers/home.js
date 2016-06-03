module.exports = function(app) {
  var controller = {};
  var User = app.models.user;

  controller.index = function(req, res) {
    res.render('home/index', {
      user: req.user
    });
  };

  controller.createUser = function(req, res) {

    var user = new User();
    user.fullname = 'Victor Dias de Oliveira';
    user.password = 'adm123';
    user.email = 'victor.dias.oliveira@gmail.com';


    User.findOrCreate({
      email: 'victor.dias.oliveira@gmail.com'
    }, user, function(err, val) {
      if (err) {
        console.log(err);
      }
      if (val) {
        user = val;
      }
    });

    res.json(user);


  };

  controller.testPasswordEncrypt = function(req, res) {

    User.findOne({
      email: 'victor.dias.oliveira@gmail.com'
    }).then(
      function(user) {
        // test a matching password
        user.comparePassword('adm123', function(err, isMatch) {
          if (err) throw err;
          console.log('adm123:', isMatch); // -&gt; Password123: true
        });

        // test a failing password
        user.comparePassword('123Password', function(err, isMatch) {
          if (err) throw err;
          console.log('123Password:', isMatch); // -&gt; 123Password: false
        });
      },
      function(err) {
        console.log(err);
      });

  };

  return controller;
};
