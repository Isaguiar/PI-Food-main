//import React, {useEffect} from 'react';
import {sortRecipes} from '../actions';
import {useDispatch} from 'react-redux';

export default function handleSelectOrder(event){

    const dispatch= dispatch();
	event.preventDefault();
	let recipes = sortRecipes(event.target.value);
	console.log(recipes);
	dispatch(sortRecipes(recipes));
	alert('funciona')
}