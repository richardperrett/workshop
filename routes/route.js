const express = require('express');
const router = express.Router();

//retrieving data
router.get('/pieces', function(req, res, next){
 res.send("retrieving the pieces list");
});

//add a timepiece
router.post('/piece', function(){
  //logic to add a timepiece

});

//delete a  timepiece
router.post('/piece', function(){
  //logic to add a timepiece

});





module.exports = router;