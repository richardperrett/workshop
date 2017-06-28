const express = require('express');
const router = express.Router();


const Watch = require('../models/simpleWatches');

//retrieving data
router.get('/pieces', function(req, res, next){
 
  Watch.find(function(err, watches){
     res.json(watches);   
  })

});

//add a timepiece
router.post('/piece', function(req, res){
  let newWatch = new Watch({
    
    pieceID: req.body.pieceID,
    make: req.body.make,
    caliber: req.body.caliber,
    case: req.body.case

  });

  newWatch.save( function(err, watch){

    if(err) {
        res.json({msg : 'failed to add watch'});

    }
    else {
        res.json({msg: 'Watch successfully added to Database'});
    }

  });
 

});

//delete a  timepiece
router.post('/piece/:id', function(){
  
  Watch.remove({_id: req.paras.id}, function(err, result){

    if(err)
    {
      res.json(err);
    }
    else {
      res.json(result);
    }
});

});

module.exports = router;