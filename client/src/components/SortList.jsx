import React, {useEffect} from 'react';
import {displayedRecipes, updateList} from '../actions';
import {useDispatch, useSelector} from 'react-redux';
import {splitParameters, sortArray} from '../utils/sortArray.js';
import {getRecipePerPAge} from '../utils/recipesPerPage.js'
//import handleSelectOrder from '../utils/handleSelectOrder';
export default function SortList(){
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes);
  


	const handleChange =  function(e){

    const parameters = splitParameters(e.target.value, recipes);
    const sortedRecipes = sortArray(parameters, recipes);
    dispatch(updateList(sortedRecipes));
    
	}
	

	return(
        <>
        <form >
        <select onChange = {handleChange}>
            <option value= ''>Ordenar</option>
            <option value= 'title asc'>Nombre(a-z)</option>
            <option value= 'title desc'>Nombre(z-a)</option>
            <option value= 'score asc'>Puntaje(0-100)</option>
            <option value= 'score desc'>Puntaje(100-0)</option>
        </select>
        </form>
        </>
	)
}