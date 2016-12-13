var bcrypt      = require('bcrypt-nodejs');

// module.exports = function (password) {
//     var bc = {
//         generateHash     : function() {
//             return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
//         },
//         validatePassword : function() {
//            return bcrypt.compareSync(password, this.local.password);
//        }
//     };
// };o

exports.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

exports.validatePassword = function(req_password, db_password) {
           return bcrypt.compareSync(req_password, db_password);
       }
