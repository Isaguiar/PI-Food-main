import styles from './App.module.css';
import {useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {Route } from "react-router-dom";
import Home from "./views/home";
import NavBar from "./components/navBar";
import Pagination from './components/pagination';
import ChoicesBar from './components/choicesBar';
import Details from './views/details';
import Add from './views/addRecipe';
import {getRecipes, getTypes, updateList } from './actions';


function App() {
    const dispatch = useDispatch();
    const allRecipes = useSelector(state => state.allRecipes);
    
    useEffect( ()=>dispatch(getRecipes()), []);

    useEffect(()=> dispatch(getTypes()), []);
    
  return (

    <div className={styles.App}>
      <div className={styles.header}>
        <h1>Sabor y Nutrición</h1> 
      </div>
        <Route path = "/recipes"  component = {NavBar}/>
        <Route path = "/recipes/add" exact component = {Add}/>
        <Route path = "/recipes/home" exact component = {ChoicesBar} />
        <Route path = "/recipes/home" exact component = {Pagination} />
        <Route path = "/recipes/home" exact component = {Home} />
        <Route path = "/recipes/home" exact component = {Pagination} />
        <Route path= "/recipes/details/:id" exact component = {Details}/>
      
    </div>
  );
}

export default App;
