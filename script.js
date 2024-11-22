// Función para manejar la activación del botón "ENVIAR DATOS"
function actualizarBotonEnviar() {
    var checkboxPropietario = document.getElementById("propietario");
    var enviarBtn = document.getElementById("enviar-btn");

    if (checkboxPropietario.checked) {
        enviarBtn.disabled = false;
        enviarBtn.classList.add("active");
    } else {
        enviarBtn.disabled = true;
        enviarBtn.classList.remove("active");
    }
}

// Función para mostrar u ocultar el formulario de INFORMACIÓN CONFIDENCIAL
function mostrarInformacionConfidencial() {
    var checkboxTercero = document.getElementById("tercero");
    var infoConfidencial = document.getElementById("info-confidencial");

    if (checkboxTercero.checked) {
        infoConfidencial.classList.remove("hidden");
    } else {
        infoConfidencial.classList.add("hidden");
    }
}


// Función para borrar los datos del formulario
function borrarDatos() {
    document.forms["FormProducto"].reset();
}


// Función para validar el formulario
function validar() {
    // Obtener los valores de los campos
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;

    // Expresión regular para validar el correo electrónico
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    // Validar correo electrónico
    if (!expresion.test(email)) {
        alert("Correo electrónico no válido.");
        return false;
    }

    // Validar teléfono (10 dígitos y solo números)
    if (telefono.length !== 10 || isNaN(telefono)) {
        alert("El teléfono debe contener exactamente 10 dígitos y solo números.");
        return false;
    }

    // Si todo es válido, deshabilitar el botón de envío
    deshabilitarBoton();
    return true;
}

// Función para deshabilitar el botón de envío después de la primera pulsación
function deshabilitarBoton() {
    var boton = document.getElementById('enviar-btn');
    boton.disabled = true;  // Deshabilitar el botón
    boton.value = "Enviando datos…";  // Cambiar el mensaje del botón
    this.form.submit();  // Enviar el formulario
}
