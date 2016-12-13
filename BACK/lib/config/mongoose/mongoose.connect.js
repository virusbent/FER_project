var mongoose     = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/fer_app');

var connection  = mongoose.connection;

connection.on('error', console.error.bind(console, '!> connection error:'));
connection.once('open', function () {
    console.log('!> MONGOOSE CONNECTION ESTABLISHED');
});

module.exports = mongoose;
