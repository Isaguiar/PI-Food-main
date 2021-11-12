import axios from 'axios';

export function createNewRecipe(payload) {
    return (dispatch) => {
        axios.post('http://localhost:3001/recipe', payload)
        .then((response) => { 
             return response;
            });
    };
   
}

export function getRecipes(){
     return (dispatch) => {
        axios.get('http://localhost:3001/recipes').then(response => {
            dispatch({
                type: 'GET_RECIPES', 
                payload: response.data.map(item => item)
            });
        });
    };

}

export function getDetails(id){
     return (dispatch) => {
        axios.get(`http://localhost:3001/recipes/${id}`).then(response => {
            dispatch({
                type: 'GET_DETAILS', 
                payload: response.data
            });
        });
    };

}
export function updateList(payload){
    return{
       type: 'UPDATE_LIST',
       payload 
    }
    
}

export function getTypes() {
    return (dispatch) => {
        axios.get('http://localhost:3001/types').then(response => {
            dispatch({
                type: 'GET_TYPES', 
                payload: response.data
            });
        });
    };
}

export function findByTitle(title){
    return (dispatch) => {
        axios.get(`http://localhost:3001/recipes?name=${title}`)
            .then(response => {
            dispatch({
                type: 'FIND_BY_TITLE',
                payload: response.data
            })
        } )
    }
};

export function displayRecipes(payload){
    return{
        type: 'DISPLAY_RECIPES',
        payload 
    }
};

export function sortRecipes(payload){
    return{ 
        type: 'SORT-RECIPES',
        payload
    }
};