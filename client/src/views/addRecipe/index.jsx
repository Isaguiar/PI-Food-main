import styles from './AddRecipe.module.css';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {createNewRecipe, getTypes, getRecipes, updateList} from '../../actions';


export default function AddRecipe(){
	
	const dispatch = useDispatch();
	const history = useHistory();
	const typeSelection = useSelector(state => state.dietTypes);
   const allRecipes =useSelector(state => state.allRecipes);

   if(!typeSelection.length) dispatch(getTypes());
   
	const [recipe, setRecipe] = useState({
		title: '',
		diet: [],
		summary: '',
		score: 0,
		healthScore: 0,
		instructions:'',
		image: ''
	});
      
	const handleChange = function(e){
			setRecipe({
			...recipe,
			[e.target.name]: e.target.value
		});
         

	}
        
    const handleSelect = function(e){
		setRecipe({
			...recipe,
			diet: [...recipe.diet, e.target.value]
		})
	} 

	const handleSubmit= async  function(e){
	 e.preventDefault();
    try{
	 await dispatch(createNewRecipe(recipe));
    alert('Felicitaciones! Acabaste de enviar una nueva receta!');
	 setRecipe({
		title: '',
		diet: [],
		summary: '',
		score: 0,
		healthScore: 0,
		instructions:'',
		image: ''
	});
    await dispatch(getRecipes());
    await dispatch(updateList(allRecipes));
	 history.push('/recipes/home');
	 }catch (err){
      alert(err)
   };

   }

     return (
       <div className= {styles.container} >
    	   <form onSubmit = {handleSubmit}>

    	      <div className = {styles.row}>
    	   		<div className = {styles.col-25} >
            		<label htmlFor="title">Nombre*</label>
            	</div>
            	<div className = {styles.col-75}>	
            		<input type="text" name="title" onChange = {handleChange} required/>
            	</div>
            </div>

            <div className = {styles.row}>
               <div className = {styles.col-25}>
                  <label htmlFor="diet">Tipos de Dieta</label>
               </div>
               <div className = {styles.col-75}>
                  <select type="text" name="diet" multiple onChange = {handleSelect}>
                     {typeSelection?.map(item => {return  <option key = {item.id}
                  	   value = {item.id}>{item.name}</option>})}
                  </select>
               </div>
            </div>

            <div className = {styles.row}>
               <div className = {styles.col-25} >
                  <label htmlFor="summary">Resumen del plato*</label>
               </div>
               <div className = {styles.col-75}>
                  <textarea  name="summary"  onChange = {handleChange} required>
                  </textarea>
               </div>
            </div>

            <div className = {styles.row}>
               <div className = {styles.col-25} >
                  <label htmlFor="score">Puntuaci??n</label>
               </div>
               <div className = {styles.col-75}>
                  <input type="number" name="score" min="10" max="100" onChange = {handleChange}  />
               </div>
            </div>

            <div className = {styles.row}>
               <div className = {styles.col-25} >
                  <label htmlFor="healthScore">Nivel de "comida saludable"</label>
               </div>
               <div className = {styles.col-75}>
                  <input type="number" name="healthScore" onChange = {handleChange} min="10" max="100" />
               </div>
            </div>

            <div className = {styles.row}>
               <div className = {styles.col-25}>
                  <label htmlFor="instructions">Paso a paso</label>
               </div>
               <div className = {styles.col-75}>
                  <textarea name="instructions" onChange = {handleChange}>
                  </textarea>
            </div>
            </div>
            <div className = {styles.row}>
               <div className = {styles.col-25} >
                  <label htmlFor="image">Imagen</label>
               </div>
               <div className = {styles.col-75}>
                  <input type="url" name="image" onChange = {handleChange} />
               </div>
            </div>

              <button type="submit">Enviar la nueva receta</button>

         </form>
      </div>
   )
}