window.onload = function () {
    let email = document.getElementById("email"); console.log(email)
    let password = document.getElementById("password"); console.log(password)
    let form = document.querySelector("form"); console.log(form)

    let errores

    email.addEventListener("blur", e => {
        if (!email.value || email.value == "") { //al dar TRUE jamas pudimos hacer que vuelva el estilo "is-invalid"
            errores++
            email.nextElementSibling.classList.add("is-invalid");
            email.nextElementSibling.innerHTML = "Debes ingresar un email";
        } else {  // Preguntar a Fede cómo se valida un email. @ (metodo "find/include/indexOf"? si es que es un array...)
            email.nextElementSibling.classList.toggle("is-valid");
        }
    })

    password.addEventListener("blur", e => {
        if (!password.value || password.value == "") { //al dar TRUE jamas pudimos hacer que vuelva el estilo "is-invalid"
            errores++
            password.nextElementSibling.classList.add("is-invalid");
            password.nextElementSibling.innerHTML = "Debes ingresar tu password";
        } else {
            password.nextElementSibling.classList.toggle("is-valid");
        }
    })

    form.addEventListener("submit", e =>
        errores > 0 ? e.preventDefault() : ""
    )
}