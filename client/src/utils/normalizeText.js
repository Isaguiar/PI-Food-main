
export function normalizeText(str){
    
    let str1= str;

    while(str1.indexOf('<') !== -1 ){
        let open = str1.indexOf('<');
        let close= str1.indexOf('>');
        let fragment = str1.substring(open, close+1);
        str1 = str1.substring(close + 1);
        str = str.replace(fragment, '');
        
    }
    console.log(str);
    return str;
    
}