function validarNombre() {
    var nombreInput = document.getElementById('nombre');
    var nombre = nombreInput.value.trim();
    var errorNombre = document.getElementById('error-nombre');
  
    if (nombre.length < 6 || !nombre.includes(' ')) {
      errorNombre.textContent = 'El nombre debe tener al menos 6 letras y un espacio.';
    }
  }
  
  function validarEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();
    var errorEmail = document.getElementById('error-email');
  
    var emailRegex = /^\S+@\S+\.\S+$/;
  
    if (!emailRegex.test(email)) {
      errorEmail.textContent = 'Ingrese un email válido.';
    }
  }
  
  function validarContrasena() {
    var contrasenaInput = document.getElementById('contrasena');
    var contrasena = contrasenaInput.value.trim();
    var errorContrasena = document.getElementById('error-contrasena');
  
    var contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    if (!contrasenaRegex.test(contrasena)) {
      errorContrasena.textContent = 'La contraseña debe tener al menos 8 caracteres y contener letras y números.';
    }
  }
  
  function validarRepetirContrasena() {
    var contrasenaInput = document.getElementById('contrasena');
    var repetirContrasenaInput = document.getElementById('repetir-contrasena');
    var repetirContrasena = repetirContrasenaInput.value.trim();
    var errorRepetirContrasena = document.getElementById('error-repetir-contrasena');
  
    var contrasena = contrasenaInput.value.trim();
  
    if (repetirContrasena !== contrasena) {
      errorRepetirContrasena.textContent = 'Las contraseñas no coinciden.';
    }
  }
  
  function validarEdad() {
    var edadInput = document.getElementById('edad');
    var edad = parseInt(edadInput.value.trim());
    var errorEdad = document.getElementById('error-edad');
  
    if (isNaN(edad) || edad < 18) {
      errorEdad.textContent = 'La edad debe ser un número entero mayor o igual a 18.';
    }
  }
  
  function validarTelefono() {
    var telefonoInput = document.getElementById('telefono');
    var telefono = telefonoInput.value.trim();
    var errorTelefono = document.getElementById('error-telefono');
  
    var telefonoRegex = /^\d{7,}$/;
  
    if (!telefonoRegex.test(telefono)) {
      errorTelefono.textContent = 'Ingrese un número de teléfono válido (al menos 7 dígitos).';
    }
  }
  
  function validarDireccion() {
    var direccionInput = document.getElementById('direccion');
    var direccion = direccionInput.value.trim();
    var errorDireccion = document.getElementById('error-direccion');
  
    if (direccion.length < 5) {
      errorDireccion.textContent = 'La dirección debe tener al menos 5 caracteres.';
    }
  }
  
  function validarCiudad() {
    var ciudadInput = document.getElementById('ciudad');
    var ciudad = ciudadInput.value.trim();
    var errorCiudad = document.getElementById('error-ciudad');
  
    if (ciudad.length < 3) {
      errorCiudad.textContent = 'La ciudad debe tener al menos 3 caracteres.';
    }
  }
  
  function validarCodigoPostal() {
    var codigoPostalInput = document.getElementById('codigo-postal');
    var codigoPostal = codigoPostalInput.value.trim();
    var errorCodigoPostal = document.getElementById('error-codigo-postal');
  
    if (codigoPostal.length < 3) {
      errorCodigoPostal.textContent = 'El código postal debe tener al menos 3 caracteres.';
    }
  }
  
  function validarDNI() {
    var dniInput = document.getElementById('dni');
    var dni = dniInput.value.trim();
    var errorDNI = document.getElementById('error-dni');
  
    var dniRegex = /^\d{7,8}$/;
  
    if (!dniRegex.test(dni)) {
      errorDNI.textContent = 'Ingrese un número de DNI válido (7 u 8 dígitos).';
    }
  }
  
  function limpiarMensajeError(campo) {
    var errorElement = document.getElementById('error-' + campo);
    errorElement.textContent = '';
  }
  
  function actualizarTitulo() {
    var nombreInput = document.getElementById('nombre');
    var nombre = nombreInput.value.trim();
    var formTitle = document.getElementById('form-title');
  
    formTitle.textContent = 'HOLA ' + nombre;
  }
  
  function validarFormulario() {
    validarNombre();
    validarEmail();
    validarContrasena();
    validarRepetirContrasena();
    validarEdad();
    validarTelefono();
    validarDireccion();
    validarCiudad();
    validarCodigoPostal();
    validarDNI();
  
    var errorMessages = document.getElementsByClassName('error-message');
    var hasErrors = false;
  
    for (var i = 0; i < errorMessages.length; i++) {
      if (errorMessages[i].textContent !== '') {
        hasErrors = true;
        break;
      }
    }
  
    if (hasErrors) {
      alert('Existen errores en el formulario. Por favor, revise los campos marcados en rojo.');
      return false;
    }
  
    var formData = new FormData(document.getElementById('subscription-form'));
    var formValues = '';
  
    for (var pair of formData.entries()) {
      formValues += pair[0] + ': ' + pair[1] + '\n';
    }
  
    alert('Información cargada en el formulario:\n\n' + formValues);
    return false;
  }
  