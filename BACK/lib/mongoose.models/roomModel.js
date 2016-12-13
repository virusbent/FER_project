var mongoose    = require('./../config/mongoose/mongoose.connect');
var Schema      = mongoose.Schema;

var roomSchema  = new Schema({
    _id         : Schema.Types.ObjectId,
    room_name   : String,
    description  : String,
    location    :
        {
            loc_id   : String,
            adress   : String,
            lat_long : String
        },
    img         :
        {
            thumbnail: [String],
            md       : [String],
            lg       : [String]
        },
    type        :
        {
            trending    : Boolean,
            recommended : Boolean
        },
    rating      :
        {
            all_ratings : [Number],
            avrg_rating : Number
        },
    timestamp   :
        {
            type     : Date,
            default  : Date.now()
        }
});

// TODO: dicide if this method need to return something or not
//       and if i need this method at all...
// roomSchema.methods.calcAvrgRating = function(){
//     var totalRatings = this.rating.all_ratings.length;
//     var sum          = 0;
//
//     for (var i = 0 ; i < length ; i++){
//         sum = sum + rating[i];
//     };
//     this.rating.avrg_rating = sum/length;
//     return this.rating.avrg_rating
// }

module.exports = mongoose.model('Room', roomSchema);
