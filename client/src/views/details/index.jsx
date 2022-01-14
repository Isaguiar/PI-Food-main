import styles from "./Details.module.css";
import {useSelector} from 'react-redux';
import {normalizeText} from '../../utils/normalizeText.js';

export default function Details(){
   
    const data = useSelector(state => state.recipe);
    const recipe = data[0];
    let summary;
    let instructions;

    if(!recipe){
  	    return (
  		<div className={styles.containerLoad}>
  		    <img src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" alt="Loading---"/>
  		    <h3>Loading...</h3>
  		</div>
  		)
   }

    if(recipe && recipe.origin === 'database'){
    	if(recipe.intructions){ 
    		instructions = recipe.intructions;
    	}
    	else if(recipe.summary){
    		summary = recipe.summary;
    	}
    }else{
    	if(recipe.summary) summary = normalizeText(recipe.summary);
    	if(recipe.instructions) instructions =  normalizeText(recipe.instructions);
    }
    
	return(
		<div className={styles.container}>
			<div className={styles.intro}>
				<h2>{recipe.title.toUpperCase()}</h2>
				{recipe.image !== null && <img src={recipe.image} alt="Cargando imagen..."/>}
				<p>{summary}</p>
		    </div>
			<div className= {styles.text}>
				<div className= {styles.sc}>
				{recipe.score !== null && <span><b>Puntuación por sabor:</b> &nbsp;  {recipe.score}</span>}	
				{recipe.healthScore !== null && <span><b>Saludable:&nbsp;</b>   {recipe.score}</span>}
	    		<span className= {styles.dt}>Tipos de dieta:</span>
	    			{recipe.diets.map(item => <span key={item}> {item} </span> )}  
				    {recipe.instructions !== null && <p><b>Paso a paso:</b><br/>{instructions}</p>}
				</div>	
			</div>	
		</div>
		)
	
}