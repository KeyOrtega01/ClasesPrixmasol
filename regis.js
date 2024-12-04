///<reference path="app.js" />

document.getElementById('btnRegistrar').addEventListener('click', function(event){

    event.preventDefault();
    const nombreInput = document.getElementById('nombre').value.trim();
    const apellidoInput = document.getElementById('apelli').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const sexoInput = document.getElementById('validationCustomSex').value.trim();
    const naciInput = document.getElementById('birthdayCustom').value.trim();
    const userNameInput = document.getElementById('username').value.trim();
    const ciudadInput = document.getElementById('ciudad').value.trim();
    const paisInput = document.getElementById('pais').value.trim();
    const phoneInput = document.getElementById('phone').value.trim();

    
    


    if(!nombreInput || !apellidoInput || !emailInput || !passwordInput|| !sexoInput ||
        !naciInput || !userNameInput || !ciudadInput || !paisInput || !phoneInput
     ){
        alert('Por favor, ingrese los campos faltantes')
        return;
        
    }

    if(!emailInput === email && !userNameInput === userName){
        localStorage.getItem("user", JSON.stringify({user: userName}));
      
    }

    // let user = JSON.parse(localStorage.getItem('user'))
    // const exisUser = JSON.parse(localStorage.getItem('user'));
    

    const userdata = {
        nombre: nombreInput,
        apellido: apellidoInput,
        email: emailInput,
        password: passwordInput,
        sexo: sexoInput,
        nacimiento: naciInput,
        userName: userNameInput,
        ciudad: ciudadInput,
        pais: paisInput,
        phone: phoneInput
    };

    if(insertUsuario(userdata))
        {        
            alert('Registro exitoso');
            window.location.href = 'index.html'
            return;
        }else{
            alert("Ocurrio un error");
        }
});

    
