const axios = require ('axios');

async function  buildBackup(){
const key = 'e8c0f895c54349db88faf522473cc32c';
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&addRecipeInformation=true`
console.log(url);

const allRecipes = await axios.get(url);
//console.log(allRecipes.data);
console.log(allRecipes.data.results[0].analyzedInstructions[0].steps);
}
async function details(){
	const key = 'e8c0f895c54349db88faf522473cc32c';
	const url =`https://api.spoonacular.com/recipes/715446/information?apiKey=${key}`;
	console.log(url);
	const recipeDetails = await axios.get(url);
	console.log(recipeDetails.data);
}

 buildBackup();
