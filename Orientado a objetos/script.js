class ContaBancaria {
    constructor(agencia,numero,tipo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this.saldo = 0
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor>this._saldo){
            return 'Operação Negada'
        }
        this._saldo = this._saldo - valor;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria {
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero);
        this.tipo = 'Corrente'
        this.cartaoCredito = cartaoCredito
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }
}



class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = 'Poupança'
       
    } 
}


class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = 'Universitário'
    } 

    sacar(valor){
        if(valor>500){
            return 'Saque Negado'
        }
        this._saldo = this._saldo - valor;
    }

}