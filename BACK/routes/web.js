var express     = require('express');
var bp          = require('body-parser');
var router      = express.Router();
var path        = require('path');

router.use(bp.json())
    .use(bp.urlencoded({extended: true}));

router.get('/', function(req, res, next){
    // not sure if i need to use sendFile instead of sendfile.
    // sendFile requires a path to the file, why to put the path again
    // i already did it in server.js using express.static
    res.sendFile(path.join(__dirname, '../../FRONT', 'index.html'));
    //res.status(200).json({msg: 'Reached index'});
});



module.exports = router;
