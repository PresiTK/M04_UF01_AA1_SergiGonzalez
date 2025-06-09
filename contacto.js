document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let mensaje = document.getElementById("mensaje");

    let valid = true;

    if (nombre.value== "") {
        nombre.style.border = "2px solid red";
        valid = false;
    } else {
        nombre.style.border = "2px solid green";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        email.style.border = "2px solid red";
        valid = false;
    } else {
        email.style.border = "2px solid green";
    }

    if (mensaje.value.trim() === "") {
        mensaje.style.border = "2px solid red";
        valid = false;
    } else {
        mensaje.style.border = "2px solid green";
    }

    if (valid) {
        alert("Formulario válido. ¡Enviado correctamente!");

    }
});