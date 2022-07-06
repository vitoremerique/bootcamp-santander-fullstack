interface IAnimal{
    nome : string;
    tipo: 'Terrestre' | 'Voador';
    domestico:boolean;
}

interface IFelino extends IAnimal{
    Pelos: boolean;
    VisaoNoturna:boolean;
}

interface ICanino extends IAnimal{
 porte : 'pequeno' | 'medio' | 'grande'
}

type IDomestico = IFelino | ICanino

const felino: IFelino = {
    nome:'Macaco',
    tipo:'Terrestre',
    Pelos:true,
    VisaoNoturna:true,
    domestico:false
} 

const animal: IDomestico = {
    domestico:true,
    nome: 'cachorro',
    porte:'medio',
    VisaoNoturna:true,
    tipo:'Terrestre'
}