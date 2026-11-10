function enviar(){

    var nombre = document.getElementById("nombre").value
    var correo = document.getElementById("correo").value
    var asunto = document.getElementById("asunto").value
    var mensaje = document.getElementById("mensaje").value

    if(nombre == ""){
        alert("Por favor, escribe tu nombre")
    }
    else if(correo == ""){
        alert("Por favor, escribe tu correo")
    }
    else if(asunto == ""){
        alert("Por favor, escribe el asunto")
    }
    else if(mensaje == ""){
        alert("Por favor, escribe tu mensaje")
    }
    else{
        alert("Mensaje enviado correctamente")
    }

}
