function validateForm() {
    // Obtener los valores de los campos
    var name = document.getElementById('nameInput').querySelector('input').value;
    var address = document.querySelector('input[placeholder="Dirección"]').value;
    var phone = document.querySelector('input[placeholder="Teléfono"]').value;
    var email = document.querySelector('input[placeholder="Correo"]').value;
    var password = document.querySelector('input[placeholder="Contraseña"]').value;

    // Validar que todos los campos estén llenos
    if (name === '' || address === '' || phone === '' || email === '' || password === '') {
        alert('Todos los campos son obligatorios');
        return false;
    }

    // Puedes agregar más validaciones según tus requisitos, por ejemplo, validar el formato del correo electrónico

    // Aquí puedes enviar los datos a tu servidor si es necesario
    // Simplemente devuelve true para permitir el envío del formulario
    alert('Datos enviados correctamente');
    return true;
}


  
  