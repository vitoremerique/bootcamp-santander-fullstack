var prox_numeroWrapper = document.getElementById('prox_numero');
prox_numero=0;


function increment () {
    if(prox_numero < 10){
        prox_numero = prox_numero + 1;
        prox_numeroWrapper.innerHTML = prox_numero;
    }else{
    
    prox_numero==0;
    
    }
}

function decrement () {
    if(prox_numero < 1){
        prox_numero==0;
        
    }else{

     prox_numero =prox_numero -  1;
    
    prox_numeroWrapper.innerHTML = prox_numero;
    }
    
}