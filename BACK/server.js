/**
 * Created by Evgeniy on 10/16/2016.
 */
var express     = require('express');
var app         = express();
var bp          = require('body-parser');
var cp          = require('cookie-parser');
var mo          = require('method-override');
var passport    = require('passport');
var session     = require('express-session');
var flash       = require('connect-flash');
var morgan      = require('morgan');
var path        = require('path');

// Ext.files/configurations
require ('./lib/config/passport/passport.js')(passport);
// Routes
var apiRouter   = require('./routes/api');
var webRouter   = require('./routes/web');
var authRouter  = require('./routes/auth')(passport);

app.use(bp.json())
    .use(bp.urlencoded({extended: true}))
    .use(cp())
    .use(morgan('dev'))
    .use(express.static(path.join(__dirname + './../FRONT')))
    .use(session({
        secret              : 'dickbutt',
        resave              : false,
        saveUninitialized   : true
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use(flash());

app.use('/', webRouter)
    .use('/auth', authRouter)
    .use('/api', apiRouter);

app.listen(3000, function(){
    console.log('!> Server is Listening on port 3000');
})
