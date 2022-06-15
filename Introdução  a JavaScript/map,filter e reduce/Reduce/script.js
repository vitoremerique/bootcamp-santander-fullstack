const lista=[
    {
        name:'Sabão em pó',
        preco:30
    },
    {
        name:'Cereal',
        preco:12
    },
    {
        name:'toalha',
        preco:30
    }
]
const SaldoDisponivel = 100
function calculaSaldo(saldodisponivel,lista){
    return lista.reduce(function(prev,current,index){
        console.log('Rodada',index+1)
        console.log({prev})
        console.log({current})
        return prev-current.preco
    },saldodisponivel)
}

console.log(calculaSaldo(SaldoDisponivel,lista))