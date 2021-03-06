import styles from './Pagination.module.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {displayRecipes} from '../../actions';
import {getRecipesPerPage, getNumberOfPages} from '../../utils/recipesPerPage.js';

export default function Pagination(){
  const dispatch = useDispatch();
  const totalOfRecipes = useSelector(state => state.recipes);
  const recipesPerPage = 9;
  
  const pages =getNumberOfPages(recipesPerPage, totalOfRecipes)

  const handleOnClick = function (e){
    const recipes = getRecipesPerPage(e.target.value, totalOfRecipes, recipesPerPage);
    dispatch(displayRecipes(recipes));
    
  };


  return (
    <div className= {styles.container}>
      {pages?.map(page =>{
        return( 
          <span >
            <Link to = "/recipes/home" >
              <button  value = {page} key= {page} onClick = {handleOnClick}>
                {page}
              </button>
            </Link>
          </span>
        )
      })}
    </div>
  )
}

