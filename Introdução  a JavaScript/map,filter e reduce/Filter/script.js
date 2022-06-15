function filtraPares(arr){
    return arr.filter(callback);
}
function callback(item){
    return item%2==0;
}

const meuArray = [2,5,645,8,55,22,1234]


console.log('Filtra pares ',filtraPares(meuArray))