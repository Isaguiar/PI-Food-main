
export function getRecipesPerPage(pageNumber, totalOfRecipes, recipesPerPage){

const firstRecipe = (pageNumber -1) * recipesPerPage;
const lastRecipe = pageNumber * recipesPerPage;
const displayedRecipes = totalOfRecipes?.slice(firstRecipe, lastRecipe);
return displayedRecipes;	
}

export function getNumberOfPages(recipesPerPage, totalOfRecipes){
	let pages = [];
    let numberOfPages = Math.ceil(totalOfRecipes.length/recipesPerPage);
	for(let i=1; i<=numberOfPages; i++){
	 pages.push(i);
	}
	return pages;
}

