import styles from './SearchBar.module.css';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {findByTitle} from '../../actions';



export default function SearchBar(){
	const dispatch = useDispatch();
	const [input, setInput] = useState('');

    const handleSubmit= async function(e){
    	e.preventDefault();   	
    	dispatch(findByTitle(input));
    	setInput('');
    }

	return(
		<div className={styles.container}>
		<form  onSubmit= {handleSubmit}>
		<span><input type="search" value ={input} onChange= {e => setInput(e.target.value)}/></span>
		<span><button type= 'submit'>Buscar</button></span>
		</form>
		</div>
		 )
}