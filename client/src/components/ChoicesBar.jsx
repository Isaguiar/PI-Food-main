import {useDispatch, useSelector} from 'react-redux';
import {updateList} from '../actions';
import {filterTypeChoices, filterOrigin} from '../utils/filterChoice.js';


export default function ChoicesBar(){

	const dispatch = useDispatch();
	const recipes = useSelector(state=> state.allRecipes);
	const types = useSelector(state=> state.dietTypes);
    

	function handleOnClick1(e){
		e.preventDefault();
		let result = recipes.filter(function(item){
			return item.diets.find(elem=> elem === e.target.value);
		});

		if(!result.length){ 
			alert('Ninguna receta encontrada!')
	    } else{
	        dispatch(updateList(result));
	    }
	}

	function handleOnClick2(e){
		e.preventDefault();
		console.log(recipes[100].origin, recipes[0].origin)
		let result = recipes.filter(item => item.origin ==='database');
		if(!result.length){ 
			alert('Ninguna receta encontrada!')
	    } else{
	        dispatch(updateList(result));
	    }		
	}

	function handleOnClick3(e){
		e.preventDefault();
		dispatch(updateList(recipes));
	}


	return(
	<>
	<div>
	{types?.map(item=> {return <button type= "button" value= {item.name} key={item.id} onClick={handleOnClick1}>{item.name} </button>})}
	<button type = 'button' key='invented' value= 'origin' handleOnClick ={handleOnClick2}>Sugerencias de los usuarios</button>
	<button type = 'button' key='inventedtoo' value= 'todas' handleOnClick ={handleOnClick2}>todas</button>
	</div>
	</>)
}