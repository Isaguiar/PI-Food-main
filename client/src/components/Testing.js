function cutArray(payload){
    const arr = payload.split(' ');
    const param = arr[0];
    const type = arr[1];
  
let filteredRecipes;
let sortedRecipes;
for(let i = 0; i<recipes.length; i++){
  if(parseInt(recipes[i][param])){
         filteredRecipes = recipes.filter(item => parseInt(item[param]) > 0);
         sortedRecipes= filteredRecipes.sort(
        function(a, b){
            if(type === 'asc') return  a[param] - b[param];
            else if (type === 'desc') return  b[param] - a[param];
        });
         break;
}  
}
if(!sortedRecipes){
    sortedRecipes= recipes.sort(
        function(a, b){
            if(type === 'asc') {return a[param].localeCompare(b[param])};
            if (type === 'desc'){ return b[param].localeCompare(a[param])};

        });
}


}

function sorting(){
  let obj ={
    lista: ['23', '194', null, '1310'],
    amor: undefined,
    desespero: "Joao"};
   let newLista = obj.lista.sort((a, b)=> parseInt(b) - parseInt(a));
   obj = {...obj, lista: newLista}
  console.log(obj.lista);
}



//cutArray('image asc');
sorting();