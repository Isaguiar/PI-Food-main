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
  const displayedRecipes = useSelector(state => state.displayedRecipes);
  let openingPage;

  if(!allRecipes.length){
  	dispatch(getRecipes());
  };
  
  useEffect(()=> {
    return dispatch(updateList(allRecipes))
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
   []);
  

   if(!recipes.length){
  	dispatch(updateList(allRecipes));
  } else {
  	 openingPage =getRecipesPerPage(1, recipes, 9);
  	}

  useEffect(()=> { 
    return dispatch(displayRecipes(openingPage))},
  // eslint-disable-next-line react-hooks/exhaustive-deps
   [recipes]);
  
  if(!displayedRecipes){
  	return (
  		<div className = {styles.containerLoad}>
        <img src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" alt="Loading---" />
  		  <h3>Loading...</h3>
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