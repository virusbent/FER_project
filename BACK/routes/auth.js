var express     = require('express');
var bp          = require('body-parser');
var router      = express.Router();
var mongoose    = require('../lib/config/mongoose/mongoose.connect');
var User        = mongoose.model('User');
var encrypt     = require('../lib/helpers/passwordAuthentication');

router.use(bp.json())
    .use(bp.urlencoded({extended: true}));

module.exports = function (passport) {

    router.post('/login', function (req, res) {
        var temp_user = new User({
            name    : {first: 'hard', last: 'coded'},
            local_auth    :
            {
                email : req.body.email,
                password: req.body.password
            }
        })
        .save()
            .then(function () {
                res.status(200).json({msg: 'Logged in!'});
            })
            .catch(function (err) {
                console.log('!> ERROR: ', err);
                res.status(500).json({msg: 'Could not log in...'});
            })

        console.log('!> just recieved login data: ', temp_user);
    });

    router.post('/signup', function(req, res) {
        var newUser = new User({
            _id         : mongoose.Types.ObjectId(),
            username    : req.body.username,
            auth  :
                {
                    local :
                        {
                            email   : req.body.email,
                            password    : encrypt.generateHash(req.body.password)
                        }
                }
        })
        .save()
        .then(function(){
            console.log(newUser);
            res.status(200).json({msg: 'Welcome!'});
        })
        .catch(function(err){
            console.log('!> ERROR: ', err);
            res.status(500).json({msg: 'No SIGNUP for you...'});
        })
    });

    return router;
};
