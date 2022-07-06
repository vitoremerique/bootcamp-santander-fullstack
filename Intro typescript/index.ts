//Generic types

function adicionaApendiceAListaarray(array,value){
    return array.map(array=>array+ value);
}

console.log(adicionaApendiceAListaarray([1,2,3,4],2))