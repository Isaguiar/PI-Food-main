import styles from './Recipe.module.css';
import React from 'react';


export default function Recipe({title, diets, image}){
	return(    
    <div className={styles.rc}>
        <div>
            <p>{title}</p>
        </div>
        <div className ={styles.img}>
            <img src = {image} alt='Imagen no disponible'/>
        </div>
        <div className ={styles.dt}>
            <span>{diets}</span>
        </div>
    </div>
		)
}