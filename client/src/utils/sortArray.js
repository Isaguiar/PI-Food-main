function splitParameters(str, arr){

    const splittedStr = str.split(' ');
    const property = splittedStr[0];
    const criterium = splittedStr[1];
   
    let numeric;
  

    for(let i= 0; i < arr.length; i++){
        let item = arr[i][property];
        if(item !== null && !parseInt(item)){
            numeric = false;
            break;
            
        }else if(item !== null && parseInt(item)){
            numeric = true;
            break;
        }
    };

    return {
        property,
        criterium,
        numeric
       };
}

function sortArray(param, arr){
    let {property, criterium, numeric} = param;
    
    if(numeric){
        if(criterium === 'asc'){
            return arr.sort((a, b)=> a[property] - b[property]);
        }else{
            return arr.sort((a, b)=> b[property] - a[property]);
        }

    }else{
        if(criterium === 'asc'){
            return arr.sort((a, b)=> a[property].localeCompare(b[property]));
        }else{
            return arr.sort((a, b)=> b[property].localeCompare(a[property]));
        }

    }
   
}

module.exports = {
    splitParameters,
    sortArray
}