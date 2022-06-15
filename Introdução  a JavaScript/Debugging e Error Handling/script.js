function validarray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== 'object') throw new TypeError("O array precisa ser o tipo Object");

        if (typeof num !== 'number') throw new TypeError("O numero precisa ser o tipo Number");

        if (arr.length !== num) throw new RangeError("Tamanho inválido")
        return arr
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é  um ReferenceError");
            console.log(e.message);
            throw e;
        }

        else if (e instanceof TypeError) {
            console.log("Este erro é  um TypeError");
            console.log(e.message);
            throw e;
        }

        else if (e instanceof RangeError) {
            console.log("Este erro é  um RangeError");
            console.log(e.message);
            throw e;
        }
        else{
            console.log("Ocorreu um tipo de erro não esperado ",e)
            throw e;
            
        }


    }

}

console.log(validarray([1,2,3,4,5],5))