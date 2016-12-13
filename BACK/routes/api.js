var mongoose    = require('../lib/config/mongoose/mongoose.connect');
var express     = require('express');
var bp          = require('body-parser');
var router      = express.Router();
var path        = require('path');

// mongoose.models
var Room        = require('../lib/mongoose.models/roomModel');
mongoose.model("Room");

router.use(bp.json())
    .use(bp.urlencoded({extended: true}));

router.post('/eroom/add_new', function(req, res, next){
    // this path for adding new escape room
    console.log('!> add new room -> path reached');
    var room = new Room({
        _id : mongoose.Types.ObjectId(),
        room_name   : req.body.room_name,
        description  : req.body.description,
        location    :
            {
                loc_id   : req.body.location.loc_id,
                adress   : req.body.location.adress,
                lat_long : req.body.location.latLong
            },
        type        :
            {
                trending    : req.body.type.trending,
                recommended : req.body.type.recommended
            }
    })
        .save()
        .then(function(){
            console.log('!> Success!');
            res.status(200).json({msg:'Escape Room was saved!'});
        })
        .catch(function(err){
            console.log('!> Error: ', err);
            res.status(500).json({msg:'Escape Room was NOT saved :( '});
        });
});

router.get('/eroom/get_room_data', function(req, res, next){
    // this path for getting data of escape room
    console.log('!> get_room_data -> path reached');
});

module.exports = router;
