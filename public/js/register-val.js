window.onload = function() {
  let usuario = document.getElementById('usuario'); console.log(usuario)
  let imagenUsuario = document.getElementById('imagen_usuario'); console.log(imagenUsuario)
  let email = document.getElementById('email'); console.log(email)
  let password = document.getElementById('password'); console.log(password)
  let form = document.querySelector("form"); console.log(form)
  // falta validar el select de categoría. usar el .value?

  let errores = 

  usuario.addEventListener("blur",function(e){
    let usuario = document.getElementById('usuario')
    console.log(typeof usuario.value)
    console.log(usuario.value)
    if (!usuario.value || usuario.value === ""){
      errores + 1;
      
      usuario.nextElementSibling.classList.add("is-invalid");
      usuario.nextElementSibling.classList.remove("is-valid");
      usuario.nextElementSibling.innerHTML = "El campo no puede estar vacío";
    } else if (usuario.value.length < 2) {
      errores + 1;
      usuario.nextElementSibling.classList.add("is-invalid");
      usuario.nextElementSibling.classList.remove("is-valid");
      usuario.nextElementSibling.innerHTML = "Por favor digita al menos dos caracteres"
    } else {
      usuario.nextElementSibling.classList.replace("is-invalid", "is-valid");
    }
  })

  imagenUsuario.addEventListener("blur", function (e) {
    if (!imagenUsuario.value) { 
        errores + 1;

        imagenUsuario.nextElementSibling.classList.add("is-invalid");
        imagenUsuario.nextElementSibling.classList.remove("is-valid");
        imagenUsuario.nextElementSibling.innerHTML = "Debes subir una imagen";
    } else {
        imagenUsuario.nextElementSibling.classList.replace("is-invalid", "is-valid");
    }
  })

  email.addEventListener('blur',function(e){
    /* const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}; */
    if(!email.value || email.value === ""){
      errores + 1;
      email.nextElementSibling.classList.add("is-invalid");
      email.nextElementSibling.classList.remove("is-valid");
      email.nextElementSibling.innerHTML= "Ingresa tu email";
    } else { // Preguntar a Fede cómo se valida un email. @ (metodo "find/include/indexOf"? si es que es un array...)
      email.nextElementSibling.classList.replace("is-invalid", "is-valid");
    }
  })

  password.addEventListener('blur', function(e){

    if (!password.value || password.value === ""){
      errores + 1;
      password.nextElementSibling.classList.add("is-invalid");
      password.nextElementSibling.classList.remove("is-valid");
      password.nextElementSibling.innerHTML = "El campo no puede estar vacío";
    } else if (password.value.length < 8) {
      errores + 1;
      password.nextElementSibling.classList.add("is-invalid");
      password.nextElementSibling.classList.remove("is-valid");
      password.nextElementSibling.innerHTML = "Por favor digita al menos ocho caracteres"
    } else {
      password.nextElementSibling.classList.replace("is-invalid", "is-valid");
    }
  })

  form.addEventListener('submit', (e)=>{
    if (errores > 0){
      e.preventDefault()
    }
  })
}