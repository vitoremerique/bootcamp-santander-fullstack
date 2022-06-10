const meuArray = [30,30,21,21,0,2,3,21];

function valoresUnicos (arr){
    
    const myset = new Set(arr);
    return [...myset];

}

console.log(valoresUnicos(meuArray));