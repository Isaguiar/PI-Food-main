import {Link} from 'react-router-dom';
import SortList from './SortList.jsx';
import SearchBar from './SearchBar.jsx';
import{findByName} from '../actions';
//import handleSelectOrder from '../utils/handleSelectOrder/js'

export default function NavBar(){

	
	return (
		<>
		 <Link to = 'recipes/home'><span>HOME</span></Link>
         <Link to = 'recipes/add'><span>CREAR UNA RECETA</span></Link>
         <span><SearchBar /></span>
         <span><SortList /></span>
         <span><button>Buscar</button></span>
		</>)
}