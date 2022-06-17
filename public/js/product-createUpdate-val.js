window.onload = function (){
    let nombre_producto = document.getElementById("nombre_producto");  console.log(nombre_producto)
    let descripcion_producto = document.getElementById("descripcion_producto"); console.log(descripcion_producto)
    let imagen_producto = document.getElementById("imagen_producto"); console.log (imagen_producto)
    let botonCategoria = document.querySelector(".boton-categoria"); console.log(botonCategoria) 
    let precio_producto = document.getElementById("precio_producto"); console.log(precio_producto)

    let errores = 

    nombre_producto.addEventListener("blur", function (e){ 
        if (!nombre_producto.value || nombre_producto.value === ""){ //al dar TRUE jamas pudimos hacer que vuelva el estilo "is-invalid"
        errores +1;
        nombre_producto.nextElementSibling.classList.add("is-invalid");
        nombre_producto.nextElementSibling.innerHTML = "El campo no puede estar vacío";
        } else if (nombre_producto.value.length < 5){
        errores +1;
        nombre_producto.nextElementSibling.classList.add("is-invalid");
        nombre_producto.nextElementSibling.innerHTML = "El nombre del produto debe contener al menos 5 caracteres";
        } else {
        nombre_producto.nextElementSibling.classList.toggle("is-valid");//es un estilo invisible   
        }
    })

    descripcion_producto.addEventListener("blur", function(e){
        if(descripcion_producto.value.length < 20){ //al dar TRUE jamas pudimos hacer que vuelva el estilo "is-invalid"
        errores +1;
        descripcion_producto.nextElementSibling.classList.add("is-invalid");
        descripcion_producto.nextElementSibling.innerHTML = "La descripción debe tener al menos 20 caracteres";
        } else {
        descripcion_producto.nextElementSibling.classList.toggle("is-valid");
        }
    })

    imagen_producto.addEventListener("blur", function(e){ 
        if(!imagen_producto.value){ //no sabemos bien como validar una imagen, es con un ".include(arrayExtensiones)"??
        errores +1;
        imagen_producto.nextElementSibling.classList.add("is-invalid");
        imagen_producto.nextElementSibling.innerHTML = "Debes subir una imagen";
        } else {
        imagen_producto.nextElementSibling.classList.toggle("is-valid");
        }
    })

    botonCategoria.addEventListener("blur", function (e){ 
        if (botonCategoria.value === undefined){ //No sale el innerHTML
        errores +1;
        botonCategoria.nextElementSibling.classList.add("is-invalid");
        botonCategoria.nextElementSibling.innerHTML = "Debe elegir una categoría";
        } else {
        botonCategoria.nextElementSibling.classList.toggle("is-valid");//es un estilo invisible   
        }
    })

    precio_producto.addEventListener("blur", function (e){ 
        if (precio_producto.value === ""){ //al dar TRUE jamas pudimos hacer que vuelva el estilo "is-invalid"
        errores +1;
        precio_producto.nextElementSibling.classList.add("is-invalid");
        precio_producto.nextElementSibling.innerHTML = "El campo no puede estar vacío";
        } else {
        precio_producto.nextElementSibling.classList.toggle("is-valid");//es un estilo invisible   
        }
    })

}