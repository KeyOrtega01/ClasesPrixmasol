// function user(){
//    const usuario = [{
//       nombre: nombreInput,
//       apellido: apellidoUnput
//    }];

//    if(localStorage.getItem('user')){
//       const usuario = localStorage.getItem('usuario');
//       const Bienvenido = document.getElementById('Bienvenido');
//       Bienvenido.textContent = `Bienvenida de nuevo ${usuario}`
//    }
// }
const usuarioConectado = getUsuarioConectado();
if(usuarioConectado){
    const Bienvenido = document.getElementById("Bienvenido");
    Bienvenido.textContent = `Bienvenid@ de nuevo ${usuarioConectado.nombre}`;
}else{
    window.location.href = 'login.html';
}
/*
if(localStorage.getItem("user")){
    JSON.parse(localStorage.getItem("user"));
    const losUsuarios = JSON.parse(localStorage.getItem('user'))
    losUsuarios[1];
    elusuario = losUsuarios[1];
    elusuario.nombre
    const Bienvenido = document.getElementById("Bienvenido");
    Bienvenido.textContent = `Bienvenid@ de nuevo ${elusuario.nombre}`
}
*/




// if(localStorage.getItem('user')){

//    const user = localStorage.getItem('user')
//    const Bienvenido = document.getElementById('Bienvenido');
//    Bienvenido.textContent = `Bienvenida de nuevo ${user}`;
// }