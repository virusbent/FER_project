var mongoose    = require('./../config/mongoose/mongoose.connect');
var Schema      = mongoose.Schema;

var reservationSchema  = new Schema({
    _id             : Schema.Types.ObjectId,
    room_id         : Schema.Types.ObjectId,
    user_id         : Schema.Types.ObjectId,
    reservationTime : Date
});

module.exports = mongoose.model('Reservation', reservationSchema);
