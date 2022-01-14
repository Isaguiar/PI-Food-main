const initialState = {
  allRecipes:[],
  recipes: [],
  displayedRecipes: [],
  dietTypes:[],
  recipe: []
}

export default function reducer(state = initialState, action){

switch(action.type){
  case 'CREATE_NEW_RECIPE':
    return state;

  case 'GET_RECIPES':
    return {
      ...state,
      allRecipes: action.payload
    };

  case 'UPDATE_LIST':
     return {
      ...state,
      recipes: action.payload
     }

  case 'GET_TYPES':
    return {
      ...state,
      dietTypes: action.payload
    };

  case 'FIND_BY_TITLE':
    return {
      ...state,
      recipes: action.payload,
    }  
  case 'DISPLAY_RECIPES':
    return{
      ...state,
      displayedRecipes: action.payload
  }
  case 'GET_DETAILS':
      return {
      ...state,
       recipe: action.payload
       }

  default: return state;
}
}