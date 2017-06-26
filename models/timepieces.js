const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var watchesSchema = new Schema({

    pieceID:{type: String, required: true},
    make: {type: String, required: true},
    caliber: {type: String, required: true},
    case: {type: String, required: true},
    manufactured: Date,
    purchased: Date,
    received: Date,
    workStarted: Date,
    procurementStatus: String,
    
    jobCard :[{
        jobID: String,
        jobNotes: String,    
            }],

    spareParts: [{ 
        supplier: String,
        partNumber: String,
        partName: String,
        Cost: Number,
        paidDate: Date,
        Status: String,
        Expected: Date,

        }],
   

    risks: [{riskID: String,
           riskNotes: String,

         }],

    /************** images ******************/

    images: [{imageURL: String,
            caption: String  
       }]     

});