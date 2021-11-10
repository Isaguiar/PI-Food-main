import {Link} from 'react-router-dom';
import SortList from './SortList.jsx';
import SearchBar from './SearchBar.jsx';
import{findByName} from '../actions';


export default function NavBar(){

	return (
		<>
		 <Link to = '/recipes/home'><span>HOME</span></Link>
         <Link to = '/recipes/add'><span>Sugira una receta...</span></Link>
         <span><SearchBar /></span>
         <span><button>Buscar</button></span>
         <span><SortList /></span>
		</>)
}