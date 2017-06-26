const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var simpleWatchSchema = new Schema({

    pieceID:{type: String, required: true},
    make: {type: String, required: true},
    caliber: {type: String, required: true},
    case: {type: String, required: true}
   
});