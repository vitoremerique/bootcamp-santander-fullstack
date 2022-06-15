const maca = {
    value: 2
};

const laranja = {
    value: 3
};


function mapComThis(arr,thisArgs){
 return arr.map(function(item){
      return  item * this.value;
    },thisArgs);
}

const nums = [1,2];
console.log('Meu array',nums)
console.log('this -> maçã',mapComThis(nums,maca));
console.log('this -> laranja',mapComThis(nums,laranja));