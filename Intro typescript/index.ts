const input = document.getElementById('input')as HTMLInputElement;

input.addEventListener('input',(event)=>{
 console.log('digitei');
 const i = event.currentTarget as HTMLInputElement;
 console.log(i.value)
});