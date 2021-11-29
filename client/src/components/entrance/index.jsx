import styles from './Entrance.module.css';
import {Link} from 'react-router-dom';


export default function Entrance(){
	return (
		<div className={styles.container}>
		<Link to = "/recipes/home"  exact ><button>Conozca nuestras recetas</button></Link>
		</div>
		)
}

