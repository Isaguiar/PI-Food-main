import styles from './ChoicesBar.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateList} from '../../actions';


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
	<div className= {styles.container}>
	{types?.map(item=> {return <button className= {styles.choice} type= "button" value= {item.name} key={item.id} onClick={handleOnClick1}>{item.name} </button>})}
	<button className= {styles.choice} type = 'button' key='invented' value= 'Sugerencias de los usuarios' onClick ={handleOnClick2}>Sugerencias de los usuarios</button>
	<button className= {styles.choice} type = 'button' key='inventedtoo' value= 'todas' onClick ={handleOnClick3}>todas</button>
	</div>
	</>)
}