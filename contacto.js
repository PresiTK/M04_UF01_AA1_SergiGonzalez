document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let mensaje = document.getElementById("mensaje");

    let valid = true;

    if (nombre.value == "") {
        nombre.style.border = "2px solid red";
        valid = false;
    } else {
        nombre.style.border = "2px solid green";
    }

    let format = /(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i;;

    if (!format.test(email.value.trim())) {
        email.style.border = "2px solid red";
        valid = false;
    } else {
        valid=true;
        email.style.border = "2px solid green";
    }

    if (mensaje.value == "") {
        mensaje.style.border = "2px solid red";
        valid = false;
    } else {
        mensaje.style.border = "2px solid green";
    }
});