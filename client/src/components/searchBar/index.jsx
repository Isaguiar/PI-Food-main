import styles from './SearchBar.module.css';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {findByTitle} from '../../actions';



export default function SearchBar(){
	const dispatch = useDispatch();
	const [input, setInput] = useState('');
	const history = useHistory();

    const handleSubmit= async function(e){
    	e.preventDefault();   	
    	dispatch(findByTitle(input));
    	setInput('');
    	history.push('/recipes/home');
    }

	return(
		<div className={styles.container}>
		<form  onSubmit= {handleSubmit}>
		<span><input type="search" value ={input} onChange= {e => setInput(e.target.value)} autocomplete/></span>
		<span><button type= 'submit'>Buscar</button></span>
		</form>
		</div>
		 )
}