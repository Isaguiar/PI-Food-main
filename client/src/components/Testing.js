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

function validate(){
    var string = 'gato.doc';
    var regexp =   /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    //^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
    //(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    var res = regexp.test(string);
    console.log(res);
}

function concat(){
    const a = [];
    const b = [{c: 1}, {e: 2}, {g:3}];
     
    console.log(a.concat(b));
    console.log(a);
    console.log(b);
}

 
    let str = 'If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One portion of this dish contains approximately <b>52g of protein</b>, <b>16g of fat</b>, and a total of <b>528 calories</b>. This recipe serves 6. For <b>$2.94 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. 58 people found this recipe to be scrumptious and satisfying. It works well as a reasonably priced main course for <b>Winter</b>. A mixture of canned beef broth, carrots, green onions, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around <b>8 hours and 10 minutes</b>. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/butternut-squash-beef-stew-instant-pot-pressure-cooker-or-slow-cooker-840470">Butternut Squash Beef Stew (Instant Pot, Pressure Cooker or Slow Cooker)</a>, <a href="https://spoonacular.com/recipes/slow-cooker-beef-stew-990111">Slow Cooker Beef Stew</a>, and <a href="https://spoonacular.com/recipes/slow-cooker-beef-stew-770894">Slow-Cooker Beef Stew</a>.'                
  

function transform(str){
    
    let str1= str;

    while(str1.indexOf('<') !== -1 ){
        let open = str1.indexOf('<');
        let close= str1.indexOf('>');
        let fragment = str1.substring(open, close+1);
        str1 = str1.substring(close+1);
        str = str.replace(fragment, '');
        
    }
    console.log(str);
    return str;
    
}

function findLength(){
    const a = '  ';
    console.log(!a);

}
//cutArray('image asc');
//sorting();
findLength();
//transform('<p>gluten makes you</p>');
