import styles from './Home.module.css';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {displayRecipes, updateList, getDetails, getRecipes} from '../../actions';
import {getRecipesPerPage} from '../../utils/recipesPerPage';
import Recipe from '../recipe';

export default function Home(){

  const dispatch = useDispatch();
  const allRecipes = useSelector(state => state.allRecipes);
  const recipes = useSelector(state => state.recipes);
  const found = useSelector(state => state.found);
  const displayedRecipes = useSelector(state => state.displayedRecipes);
  let openingPage;

  if(!allRecipes.length){
  	dispatch(getRecipes());
  };
  
  useEffect(()=> dispatch(updateList(allRecipes)), []);
  

   if(!recipes.length){
  	dispatch(updateList(allRecipes));
  } else {
  	 openingPage =getRecipesPerPage(1, recipes, 9);
  	}

  useEffect(()=> dispatch(displayRecipes(openingPage)), [recipes]);
  

  recipes && console.log(recipes.length);
  displayedRecipes && console.log(displayedRecipes);

  if(!displayedRecipes){
  	return (
  		<div>
  		  <p>Loading...</p>
  		</div>
  		)
  }
 
	return (
    <dir className={styles.container}>
		 {displayedRecipes?.map(recipe => <Link to = {`/recipes/details/${recipe.id}`} 
		 	onClick = {()=> dispatch(getDetails(recipe.id))}>
		 	  <span>
		      <Recipe
		        key = {recipe.id}
		        title = {recipe.title}
		        image = {recipe.image}
		        diets = {recipe.diets.map(item => <span> {item} </span>)}/>
		    </span>
      </Link>
  		)}
		</dir>
		)
}