const axios = require('axios');
const {Recipe, Diet} = require('../../db.js');
const recipeList = require('../backup/backUpRecipeList.js');
const apiKey= process.env.API_KEY;

console.log(apiKey);

async function  findAllRecipesFromApi(){
  
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=100`;
  console.log(url);
  let allRecipes;
  const recipes = await axios.get(url)
  .catch(err => err);
  
  if(recipes.data){
    allRecipes = recipes.data.results.map(item =>{
    return {
     title: item.title,
     id: item.id,
     score: item.spoonacularScore,
     healthScore: item.healthScore,
     diets: item.diets.map(diet => diet),
     origin: `api`,
     image: item.image   
    };
 });
}else{
  allRecipes = recipeList;
}
 console.log(allRecipes);
 return allRecipes;
}

async function findAllRecipesFromDb(){
    let  recipes;
    try{
       recipes = await Recipe.findAll(
            {
            include: {
             model: Diet,
             attributes:['name'],
             through:{
                attributes:[]
               }
            }
            })
    }catch{
        err =>  err;
    };

    const allRecipes = recipes.map(item =>{
        
        return{
            title: item.title,
            id: item.id,
            diets: item.diets.map(item => item.name),
            score: item.score,
            healthScore: item.healthScore,
            origin: item.origin,
            image: item.image
        }
    });

    console.log(allRecipes);
    return allRecipes;
}

async function findAllRecipes(){
    const allRecipes = await Promise.all([findAllRecipesFromApi(), findAllRecipesFromDb()])
    .catch(err => err);
    console.log(allRecipes);
    return allRecipes.flat();
}

module.exports ={
    findAllRecipesFromApi,
    findAllRecipesFromDb,
    findAllRecipes
} 