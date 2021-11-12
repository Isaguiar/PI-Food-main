import styles from './SortList.module.css';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {displayRecipes, updateList} from '../../actions';
import {splitParameters, sortArray} from '../../utils/sortArray.js';
import {getRecipesPerPage} from '../../utils/recipesPerPage.js';


export default function SortList(){
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes);
  
    const handleChange =  function(e){

        const parameters = splitParameters(e.target.value, recipes);
        const sortedRecipes = sortArray(parameters, recipes);
        const page = getRecipesPerPage(1, sortedRecipes, 9);
   
            dispatch(updateList(sortedRecipes));
            dispatch(displayRecipes(page));
	}
	

	return(
        <div className= {styles.container}>
        <form >
        <select onChange = {handleChange}>
            <option value= ''>Ordenar</option>
            <option value= 'title asc'>Nombre(a-z)</option>
            <option value= 'title desc'>Nombre(z-a)</option>
            <option value= 'score asc'>Puntaje(0-100)</option>
            <option value= 'score desc'>Puntaje(100-0)</option>
        </select>
        </form>
        </div>
	)
}