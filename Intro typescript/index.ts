interface IUsuario {
    id: string;
    email:string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor'

}

function redirecione(usuario: IUsuario){
    if(usuario.cargo){
        //redirecionar para a área de administração
    }
    //redirecionar para a área do usuário
}