function somaNumeros(arr){
    return arr.reduce(function(prev,current){
        console.log({prev})
        console.log({current})
        return prev+current;
    })
}

const nums = [1,2,3,4,5]

console.log('Soma numeros',somaNumeros(nums))