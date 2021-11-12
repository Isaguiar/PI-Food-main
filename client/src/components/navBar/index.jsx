import styles from './NavBar.module.css';
import {Link} from 'react-router-dom';
import SortList from '../sortList';
import SearchBar from '../searchBar';
import{findByName} from '../../actions';


export default function NavBar(){

	return (
		<div className= {styles.container}>

		 <Link to = '/recipes/home'><span>HOME</span></Link>
         <Link to = '/recipes/add'><span>SUGIRA UNA RECETA...</span></Link>
         <span><SearchBar /></span>
         <span><SortList /></span>
		</div>)
}