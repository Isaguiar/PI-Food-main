function splitParameters(str, arr){

    const splittedStr = str.split(' ');
    const property = splittedStr[0];
    const criterium = splittedStr[1];
   
    let numeric;
  

    for(let i= 0; i < arr.length; i++){
        let item = arr[i][property];
        if(item !== null && parseInt(item) !==0 && !parseInt(item) ){
            numeric = false;
            break;
            
        }else if(item !== null && parseInt(item) || parseInt(item) ===0){
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
    if (arr.length >1){
        if(numeric){
            if(criterium === 'asc'){
                return arr.sort((a, b)=> a[property] - b[property]);
            }else{
                return arr.sort((a, b)=> b[property] - a[property]);
            }

        }else{
            if(criterium === 'asc' && numeric === false){
                return arr.sort((a, b)=> a[property].localeCompare(b[property]));
            }else{
                return arr.sort((a, b)=> b[property].localeCompare(a[property]));
            }

        }
    }else{
        return arr;
    }
}

module.exports = {
    splitParameters,
    sortArray
}