const axios = require('axios');
const router = require('express').Router();
const {Recipe, Diet} = require('../db.js');

router.post('/', async function(req, res, next){
	const {title, diet} = req.body;
   console.log(diet);
	const allDietsId = diet.map(item => parseInt(item));
	console.log(allDietsId);

	let dietList;

  try{
  	await Promise.all(
		allDietsId.map(async function (item){
	 	const [diet, created] = await Diet.findOrCreate({
	 		where: {id: item}
	 	})
	 	console.log(diet.toJSON());
	  }));
  }catch{
  	err => alert(err);
  }
		   
    try{
    	const recipe = await Recipe.create({title})
      await recipe.setDiets(allDietsId);
      const newDish = await Recipe.findOne({where:
      	{title: title}},
      	{include: Diet}
      );
      console.log(newDish);
    }catch{
    	err => err(next)
    };

})

module.exports = router;