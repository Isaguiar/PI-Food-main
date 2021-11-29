const router = require('express').Router();
const {Diet} = require('../db.js');
const showTypesOfDiet = require('./controllers/typesOfDiet.js');


router.get('/', async function (req, res, next){

  try{
  	const allTypes = await showTypesOfDiet();
  	res.send(allTypes);
  }catch{
  	err => next (err);
  }  
})


module.exports = router;