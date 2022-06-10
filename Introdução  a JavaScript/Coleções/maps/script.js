function getAdmins(map){
    let admins=[];
for([Key, value] of map){
    if (value ==='Admin'){
        admins.push(Key);
}}
return admins;
}
const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Lucas','Admin');
usuarios.set('Jaqueline','Admin');
usuarios.set('Carla','User');
usuarios.set('Diana','User');

console.log(getAdmins(usuarios));
