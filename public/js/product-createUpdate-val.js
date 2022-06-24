window.onload = function () {
    let nombre_producto = document.getElementById("nombre_producto"); console.log(nombre_producto)
    let descripcion_producto = document.getElementById("descripcion_producto"); console.log(descripcion_producto)
    let imagen_producto = document.getElementById("imagen_producto"); console.log(imagen_producto)
    let precio_producto = document.getElementById("precio_producto"); console.log(precio_producto)
    let form = document.querySelector("form"); console.log(form)

    let errores =

        nombre_producto.addEventListener("blur", function (e) {
            if (!nombre_producto.value || nombre_producto.value === "") { 
                errores + 1;
                nombre_producto.nextElementSibling.classList.add("is-invalid");
                nombre_producto.nextElementSibling.classList.remove("is-valid");
                nombre_producto.nextElementSibling.innerHTML = "El campo no puede estar vacío";
            } else if (nombre_producto.value.length < 5) {
                errores + 1;
                nombre_producto.nextElementSibling.classList.add("is-invalid");
                nombre_producto.nextElementSibling.classList.remove("is-valid");
                nombre_producto.nextElementSibling.innerHTML = "El nombre del produto debe contener al menos 5 caracteres";
            } else {
                nombre_producto.nextElementSibling.classList.replace("is-invalid","is-valid");
            }
        })

    descripcion_producto.addEventListener("blur", function (e) {
        if (descripcion_producto.value.length < 20) { 
            errores + 1;
            descripcion_producto.nextElementSibling.classList.add("is-invalid");
            descripcion_producto.nextElementSibling.classList.remove("is-valid");
            descripcion_producto.nextElementSibling.innerHTML = "La descripción debe tener al menos 20 caracteres";
        } else {
            descripcion_producto.nextElementSibling.classList.replace("is-invalid","is-valid");
        }
    })

    imagen_producto.addEventListener("blur", function (e) {
        if (!imagen_producto.value) {
            errores + 1;
            imagen_producto.nextElementSibling.classList.add("is-invalid");
            imagen_producto.nextElementSibling.classList.remove("is-valid")
            imagen_producto.nextElementSibling.innerHTML = "Debes subir una imagen";
        } else {
            imagen_producto.nextElementSibling.classList.replace("is-invalid","is-valid");
        }
    })

    precio_producto.addEventListener("blur", function (e) {
        if (precio_producto.value === "") { 
            errores + 1;
            precio_producto.nextElementSibling.classList.add("is-invalid");
            precio_producto.nextElementSibling.classList.remove("is-valid")
            precio_producto.nextElementSibling.innerHTML = "El campo no puede estar vacío";
        } else {
            precio_producto.nextElementSibling.classList.replace("is-invalid","is-valid");
        }
    })

    form.addEventListener("submit", (e) => {
        if (errores > 0) {
            e.preventDefault()
        } 
    })
}