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
  		<div className={styles.container}>
  		  <p>Loading...</p>
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
				{recipe.score !== null && <span>Puntuación por sabor:{recipe.score}</span>}	
				{recipe.healthScore !== null && <span>Saludable:{recipe.score}</span>}
				</div>
	    		<p>Tipos de dieta:</p>
	    			{recipe.diets.map(item => <p key={item}> {item} </p> )}
				 {recipe.instructions !== null && <p>{instructions}</p>}
			</div>	
		</div>
		)
	
}