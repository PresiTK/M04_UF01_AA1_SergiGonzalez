function form_send(e) {
    e.preventDefault(); 

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let mensaje = document.getElementById("mensaje");

    let valid = true;

    if (nombre.value == "") {
        nombre.style.border = "2px solid red";
        nombre.style.color = "red";
        valid=false;
    } else {
        nombre.style.border = "2px solid green";
        nombre.style.color = "green";
    }

    let format = /(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i;;

    if (!format.test(email.value.trim())) {
        email.style.border = "2px solid red";
        email.style.color = "red";
        valid=false;
    } else {
        email.style.border = "2px solid green";
        email.style.color = "green";
    }

    if (mensaje.value == "") {
        mensaje.style.border = "2px solid red";
        mensaje.style.color = "red";
        valid=false;
    } else {
        mensaje.style.border = "2px solid green";
        mensaje.style.color = "green";
    }
    if(valid){
        document.getElementById("contactForm").submit();
    }
};