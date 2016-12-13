var localStrategy       = require('passport-local').Strategy;
var facebookStrategy    = require('passport-facebook').Strategy;
var authConfig          = require('./passport.config');
var mongoose            = require('mongoose');
var User                = require('../../mongoose.models/UserModel');



module.exports = function(passport){

    passport.serializeUser(function(user, done){
        return done(null, user._id)
    });


    passport.deserializeUser(function(id, done) {
    console.log('deserializeUser, id: ', id);
    User.find({_id:id})
        .exec()
        .then(function(user){
          return done(null,user);
        })
        .catch(function(err){
          d('deserializeUser ERROR: ', err.message);
          return done(err);
        });
  });

    passport.use('local-login', new localStrategy({
        usernameField     : 'email',
        passwordField     : 'password',
        passReqToCallback : true          // allows us to pass back the entire request to the callback
    },

    function(req, email, password, done){
        console.log('* login : email -> ', email);
          // find user in the database
    }));

    passport.use('local-signup', new localStrategy({
        usernameField     : 'email',
        passwordField     : 'password',
        passReqToCallback : true          // allows us to pass back the entire request to the callback
    },

    function(req, email, password, done){
          // add user to the database
          console.log('* signup : email -> ', email);

          User.findOne({    'auth.local.email' : email  })
          .exec()
          .then(function(user){
              if (user == true){
                  console.log('* signup : ' + email + ' is taken.');
                  return done(null, false, req.flash('message', 'This email is taken.'));
              }
              else{
                  console.log('* signup : creating new User...');
                  user = new User({
                      _id               : mongoose.Types.ObjectId(),
                      'name.first'      : req.body.first_name,
                      'name.last'       : req.body.last_name,
                      'auth.local.email': req.body.email
                  });
                  user.auth.local.password = user.generateHash(req.body.password);
                  user.save().then(function(){
                      console.log('* signup : User created successfuly.');
                      return done(null, user);
                  })
                  .catch(function(error){
                      console.log('* signup : Error -> ', error);
                      return done(error);
                  })
              }
          })
          .catch(function(error){
              console.log('* signup : passport-local Error -> ', error);
              return done(error);
          })
    }));

};
