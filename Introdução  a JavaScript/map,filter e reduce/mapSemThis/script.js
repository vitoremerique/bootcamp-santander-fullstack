function mapSemThis(arr){
   return arr.map(function(item){
        return item*2;
    })
}

const nums = [2,4,6,8,7]

console.log('Map sem this ', mapSemThis(nums))