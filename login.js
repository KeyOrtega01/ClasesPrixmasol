/// <reference path="app.js" />

cerrarSesion();

document.getElementById('btnConfirmar').addEventListener("click", function (event) {
    
    event.preventDefault();
    const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("exampleModal"));
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const modalBody = document.querySelector(".modal-body");
  


    modalBody.innerHTML = "";
    
    if (!emailInput || !passwordInput) {
        if (!emailInput && !passwordInput) {
            modalBody.textContent = "Por favor, ingrese su correo electrónico y contraseña.";
            modalBody.style.color = 'blue';
        } else if (!emailInput) {
            modalBody.textContent = "Por favor, ingrese su correo electrónico.";
            modalBody.style.color = 'blue';
        } else if (!passwordInput) {
            modalBody.textContent = "Por favor, ingrese su contraseña.";
            modalBody.style.color = 'blue';
        }

        modal.show();
        return;
    }

    
    /*
    const users = JSON.parse(localStorage.getItem('user'));
    const user = users.find(user => user.email === emailInput && user.password === passwordInput)
    */

    /*if (emailInput === user.email && passwordInput === user.password) {
        localStorage.getItem('user', JSON.stringify({user: emailInput}))
        window.location.href = "index2.html";
        return;

    }*/
    const user =validarUsuario({ email : emailInput, password: passwordInput}); 
    if(user)
    {
        setUsuarioConectado(user);
        window.location.href = "index.html";
        return;

    }else{
        modalBody.textContent = "Correo electrónico o contraseña incorrectos.";
        modalBody.style.color = 'red';
    }
    modal.show();

});


