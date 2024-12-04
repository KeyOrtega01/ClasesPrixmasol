const user_key = 'user';
const user_loggedIn = 'loggedIn';
/**
 * Devuelve el usuario que corresponde al correo electronico solicitado
 * @param {string} username Correo electronico
 * @returns Usuario 
 */
function getUsuario(username){
    const datos = localStorage.getItem(user_key);
    if(datos){
        const jsonData = JSON.parse(datos);
        for(user of jsonData){
            if(user.email && user.email.toUpperCase() === username.toUpperCase()){
                return user;
            }
        }
    }
    return null;
}
/**
 * Valida si el usuario y la contrasena son validos
 * @param {Login} user Login del usuario
 * @returns {Usuario} Retorna el usuario conectado en caso de que sea valido.
 */
function validarUsuario(user){
    const userDB = getUsuario(user.email);
    
    if (userDB && userDB.email === user.email && userDB.password === user.password) {
        return userDB;
    }
    return null;
}

function insertUsuario(usuario){
    const datos = localStorage.getItem(user_key);
    if(datos){
        const jsonData = JSON.parse(datos);
        jsonData.push(usuario);
        localStorage.setItem(user_key, JSON.stringify(jsonData));
        return true;
    }
    return false;
}

function listUsuarios(){
    const datos = localStorage.getItem("user");
    if(datos){
        const jsonData = JSON.parse(datos);
        return jsonData;
    }
    return null;
}

function updateUsuario(usuario){
    const usuarios = listUsuarios();
    for(user of usuarios){
        if(usuario.email == user.email){
            user = usuario;
            break;
        }
    }
    localStorage.setItem(user_key, JSON.stringify(usuarios));
}

function getUsuarioConectado(){
    const user =localStorage.getItem(user_loggedIn);
    if(user){
        return JSON.parse(user);
    }
    return null;
}
/**
 * Esta funcion guarda en el localstorage el usuario que esta conectado
 * @param {Usuario} usuario El usuario que se conecto al sistema.
 */
function setUsuarioConectado(usuario){
    localStorage.setItem(user_loggedIn,JSON.stringify(usuario));
}
/**
 * Esta funcion cierra la sesion de la aplicacion
 * 
 */
function cerrarSesion(){
    localStorage.removeItem(user_loggedIn);
}