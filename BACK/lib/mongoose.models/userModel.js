var mongoose    = require('./../config/mongoose/mongoose.connect');
var Schema      = mongoose.Schema;
var bcrypt      = require('bcrypt-nodejs');

var userSchema  = new Schema({
    _id     :   Schema.Types.ObjectId,
    username        : String,
    timestamp       :
        {
            type            : Date,
            default         : Date.now()
        },
    auth    :
        {
            local   :
                {
                    email   :   String,
                    password:   String
                },
            facebook    :
                {
                    id           : String,
                    token        : String,
                    email        : String,
                    name         : String,
                    photo_base   : String
                }
        }

    // testing
    // _id : Schema.Types.ObjectId,
    // username    : String,
    // local_auth  : {
    //     email   : String,
    //     password: String
    // }
});

module.exports = mongoose.model('User', userSchema);
