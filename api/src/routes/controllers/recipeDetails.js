const axios = require('axios');
const {Recipe, Diet} = require('../../db.js');
const apiKey = process.env.API_KEY;


async function getDetailsApi(id){
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    console.log(url);
    let result;
    const data = await axios.get(url)
    .catch(err => err);
    const recipe = data.data;
    if(recipe){
       result = [{
           title: recipe.title,
           id: recipe.id,
           summary: recipe.summary,
           diets: recipe.diets.map(diet => diet),
           score: recipe.spoonacularScore,
           healthScore: recipe.healthScore,
           instructions: recipe.instructions,
           origin: "api",
           image: recipe.image   
           }];
    }else{
       result = [];   
      };
   
   return result;
 }

   async function getDetailsDb(id){
      const recipe = await Recipe.findOne(
      {
         where:{
            id: id
         },
         include:{
            model: Diet,
            attributes: ['name'],
            through:{
               attributes:[]
            } 
         }
      });
      
         jsonRecipe = recipe.toJSON();
        
      if (recipe){
         return  [{ 
          title: jsonRecipe.title,
           id: jsonRecipe.id,
           summary: jsonRecipe.summary,
           diets: jsonRecipe.diets?.map(diet => diet.name),
           score: jsonRecipe.score,
           healthScore: jsonRecipe.healthScore,
           instructions: jsonRecipe.instructions,
           origin: jsonRecipe.origin,
           image: jsonRecipe.image  
         }]
      }

   }

module.exports= {
   getDetailsApi,
   getDetailsDb
}
