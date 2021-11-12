const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;
const axios = require('axios');
const {Recipe, Diet} = require('../../db.js');
const apiKey= process.env.API_KEY;

async function findByNameApi(name){
	const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&titleMatch=
	${name}&addRecipeInformation=true&number=100`;
   let recipes; 
	const data = await axios.get(url)
   .catch(err => err);
   
	if(data.data){
	  recipes = data.data.results.map(item =>{
      return {
        title: item.title,
        id: item.id,
        diets: item.diets.map(diet => diet),
        score: item.score,
        healthScore: item.healthScore,
        origin: item.origin,
        image: item.image   
      };
    })
   }else{
   recipes = [];
   } ;
  console.log(recipes);
  return recipes;

}	

async function findByNameDb(name){
     let  recipes;
    try{
       recipes = await Recipe.findAll({
         where: {
            title: {
              [Op.iLike]: '%'+name+'%'
            }
            },
         include: {
            model: Diet,
            attributes: ['name'],
               through:{
                  attributes:[]
                  }
         }});
   }catch{
        err =>  err;
    };
    console.log(recipes?.map(item => item.toJSON()));
   const allRecipes = recipes?.map(item =>{
        
         return{
            title: item.toJSON().title,
            id: item.toJSON().id,
            diets: item.toJSON().diets?.map(item => item.name),
            score: item.toJSON().score,
            healthScore: item.toJSON().healthScore,
            origin: item.toJSON().origin,  
            image: item?.toJSON().image
        }
    });

    console.log(allRecipes);
    return allRecipes;
    }


    async function findByName(name){
      const allRecipes = await Promise.all([findByNameApi(name), findByNameDb(name)]);
      console.log(allRecipes);

      return allRecipes?.flat();

    }

    module.exports = {
      findByNameApi,
      findByNameDb,
      findByName
    }