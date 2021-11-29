import styles from './AddRecipe.module.css';
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {createNewRecipe, getTypes} from '../../actions';


export default function AddRecipe(){
	
	const dispatch = useDispatch();
	const history = useHistory();
	const typeSelection = useSelector(state => state.dietTypes);

   if(!typeSelection.length) dispatch(getTypes());
   
	const [recipe, setRecipe] = useState({
		title: '',
		diet: [],
		summary: '',
		score: '',
		healthScore: '',
		instructions:'',
		image: ''
	});
   
    const[errors, setErrors] = useState({
   });


   function isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null);
    };

	function validate(obj) {

	   if (!obj.title) {
         obj.title= 'Campo obligatorio.'
      }; 
      if (!obj.summary.length) {
         obj.summary= 'Campo obligatorio.'
      };
      if(!parseInt(obj.score)) {
       obj.score= 'Nota de 0 a 100.'
    };
      if(!parseInt(obj.heakthScore)) {
         obj.healthScore= 'Nota de 0 a 100.'
      };
      if(!isValidURL(obj.image)) {
         obj.image= 'Hay que informar el link.'
      };

   return obj;

   };
    
	const handleChange = function(e){
			setRecipe({
			...recipe,
			[e.target.name]: e.target.value
		});
         setErrors(validate({
            ...recipe, 
            [e.target.name]: e.target.value
         }));

	}
        
    const handleSelect = function(e){
		setRecipe({
			...recipe,
			diet: [...recipe.diet, e.target.value]
		})
	} 

	const handleSubmit= function(e){
	 e.preventDefault();
	 dispatch(createNewRecipe(recipe));
	 alert('Felicitaciones! Acabaste de enviar una nueva receta!')
	 setRecipe({
		title: '',
		diet: [],
		summary: '',
		score: '',
		healthScore: '',
		instructions:'',
		image: ''
	});

	 history.push('/recipes/home');
	}

     return (
       <div className= {styles.container} >
    	   <form onSubmit = {handleSubmit}>

    	      <div className = {styles.row}>
    	   		<div className = {styles.col-25} >
            		<label htmlFor="title">Nombre</label>
            	</div>
            	<div className = {styles.col-75} className = {errors.title && styles.red}>	
            		<input type="text" name="title" onChange = {handleChange} />
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
               <div className = {styles.col-25} className= {errors.summary && styles.red}>
                  <label htmlFor="summary">Resumen del plato</label>
               </div>
               <div className = {styles.col-75}>
                  <textarea  name="summary" onChange = {handleChange}>
                  </textarea>
               </div>
            </div>

            <div className = {styles.row}>
               <div className = {styles.col-25} className= {errors.score && styles.red}>
                  <label htmlFor="score">Puntuación</label>
               </div>
               <div className = {styles.col-75}>
                  <input type="text" name="score" onChange = {handleChange} />
               </div>
            </div>

            <div className = {styles.row}>
               <div className = {styles.col-25} className= {errors.healthScore && styles.red}>
                  <label htmlFor="healthScore">Nivel de "comida saludable"</label>
               </div>
               <div className = {styles.col-75}>
                  <input type="text" name="healthScore" onChange = {handleChange} />
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
               <div className = {styles.col-25} className= {errors.image && styles.red}>
                  <label htmlFor="image">Imagen</label>
               </div>
               <div className = {styles.col-75}>
                  <input type="text" name="image" onChange = {handleChange} />
               </div>
            </div>

              <button type="submit">Enviar la nueva receta</button>

         </form>
      </div>
   )
}