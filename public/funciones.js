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


    alert('Datos enviados correctamente');
    return true;
}


  
  