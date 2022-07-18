window.onload = function () {
    let email = document.getElementById("email"); console.log(email)
    let password = document.getElementById("password"); console.log(password)
    let form = document.querySelector("form"); console.log(form)

    let errores

    email.addEventListener("blur", e => {
        if (!email.value || email.value == "") {
            errores++
            email.nextElementSibling.classList.add("is-invalid");
            email.nextElementSibling.classList.remove("is-valid");
            email.nextElementSibling.innerHTML = "Debes ingresar un email";
        } else {  
            email.nextElementSibling.classList.replace("is-invalid", "is-valid");
        }
    })

    password.addEventListener("blur", e => {
        if (!password.value || password.value == "") {
            errores++
            password.nextElementSibling.classList.add("is-invalid");
            password.nextElementSibling.classList.remove("is-valid");
            password.nextElementSibling.innerHTML = "Debes ingresar tu password";
        } else {
            password.nextElementSibling.classList.replace("is-invalid", "is-valid");
        }
    })

    form.addEventListener("submit", e =>
        errores > 0 ? e.preventDefault() : ""
    )
}