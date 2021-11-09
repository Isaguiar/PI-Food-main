import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {findByTitle} from '../actions';



export default function SearchBar(){
	const dispatch = useDispatch();
	const [input, setInput] = useState('');

    const handleSubmit= function(e){
    	e.preventDefault();
    	let a = findByTitle(input);
    	console.log(a);
    	dispatch(a);
    }

	return(
		<>
		<form  onSubmit= {handleSubmit}>
		<span><input type="search" value ={input} onChange= {e => setInput(e.target.value)}/></span>
		<span><button type= 'submit'>Buscar</button></span>
		</form>
		</>
		 )
}