require('dotenv').config();
const {Diet}= require('../../db.js');
const typeList = require('../backup/backUpTypesList.js');

const typesOfDiet= ['gluten free', 'ketogenic',  'lacto vegetarian',
  'lacto ovo vegetarian', 'low FODMAP',  'ovo vegetarian',
 'pescetarian', 'paleo', 'primal', 'vegan', 'vegetarian', 'whole30'];

async function  showTypesOfDiet(){

	let newDiets;
  let allDiets;
 
   try{
     newDiets = await Promise.all([typesOfDiet.map(async function (item){
     const [diet, created] = await Diet.findOrCreate({
       where:{
        name: item.toLowerCase()
        }
       })   
     })
     ])
	   }catch{
		   (err => alert(err))
	   };
    
    try{
    	allDiets = await Diet.findAll({
    		sort: [['name', 'DESC']],
        attributes:['name', 'id'],

    	})
    }catch{
    	(err => err)
    }
   if(!allDiets){
    return typeList;
   }else{
    return allDiets.map(item => item.toJSON()); 
   }
   
}

module.exports = showTypesOfDiet;