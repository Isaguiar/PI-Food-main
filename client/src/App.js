import styles from './App.module.css';
import {useEffect } from 'react';
import {useDispatch } from 'react-redux';
import {Route } from "react-router-dom";
import Home from "./views/home";
import NavBar from "./components/navBar";
import Pagination from './components/pagination';
import ChoicesBar from './components/choicesBar';
import Details from './views/details';
import Add from './views/addRecipe';
import Entrance from './components/entrance';
import {getRecipes, getTypes} from './actions';


function App() {
    const dispatch = useDispatch();
    
    useEffect(() =>{ 
      async function loadData(){
        try{
          await dispatch(getRecipes());
          await dispatch(getTypes());
        }catch (err){
          alert(err);
      }
    };
      loadData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    
  return (

    <div className={styles.App}>

      <div className= {styles.header}>
        <h1>Sabor y Nutrición</h1> 
      </div>
        
      <div className= {styles.ent}> 
        <Route path exact = "/" component = {Entrance}/> 
      </div>

        <Route path = "/recipes"  component = {NavBar}/>
        <Route path = "/recipes/add" exact component = {Add}/>
        <Route path = "/recipes/home" exact component = {ChoicesBar} />
        <Route path = "/recipes/home" exact component = {Pagination} />
        <Route path = "/recipes/home" exact component = {Home} />
        <Route path= "/recipes/details/:id" exact component = {Details}/>
      
    </div>
  );
}

export default App;
