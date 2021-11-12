const router = require('express').Router();
const{Recipe, Diet} = require('../db.js');
const { findAllRecipesFromApi, findAllRecipesFromDb, findAllRecipes} = require('./controllers/allRecipes');
const { findByNameApi, findByNameDb, findByName} = require('./controllers/findByName.js')
const {getDetailsApi, getDetailsDb} = require('./controllers/recipeDetails.js');


router.get('/', async function(req, res, next){
	console.log(!req.query.name);
	if(!req.query.name){
	    const recipes = await findAllRecipes()
	        .catch(err => err);
	    if(!recipes.length){ 
	    	res.status(404).send('Recipes were not found.')};
	      res.send(recipes);
   }else{
   	  const {name} = req.query;
	    console.log(req.query);
	    const allRecipes = await findByName(name)
	        .catch(err => err);
	    if(!allRecipes) res.send('Recipes were not found. Please try again later.')
		.status(404);
	    res.send(allRecipes);
   }

});

router.get('/:id', async function (req, res, next){
	const {id} = req.params;
	let recipe;
	console.log(id.toString().length);
	if (id.toString().length === 36){
       recipe =  await getDetailsDb(id)
         .catch(err => err); 
	}else{
		recipe = await getDetailsApi(id)
		.catch(err => err);
	}
	console.log(recipe);
	recipe? res.send(recipe): res.send('Sorry, recipe was not found.')
	
})

module.exports = router;

