import {useDispatch, useSelector} from 'react-redux';
import {updateList} from '../actions';
import {filterTypeChoices, filterOrigin} from '../utils/filterChoice.js';


export default function ChoicesBar(){

	const dispatch = useDispatch();
	const recipes = useSelector(state=> state.recipes);
	const types = useSelector(state=> state.dietTypes);
    

	function handleOnClick(e){
		e.preventDefault();
		console.log(recipes.length);
		console.log('value', e.target.value);
		let result= [];
		if(e.target.value === 'origin'){
			result = recipes.filter(item => item[origin] === 'database');
		} else{ 
			result = recipes.filter(function(item){
			return item.diets.find(elem=> elem === e.target.value);
		});

		}
		console.log(result.length);
		if(!result.length){ 
			alert('Ninguna receta encontrada!')
	    } else{
	        dispatch(updateList(result));
	    }
	}

	return(
	<>
	<div>
	{types?.map(item=> {return <button type= "button" value= {item.name} key={item.id} onClick={handleOnClick}>{item.name} </button>})}
	<button type = 'button' key='invented' value= 'origin' handleOnClick ={handleOnClick}>Sugerencias de los usuarios</button>
	</div>
	</>)
}