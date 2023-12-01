document.getElementById('signUp').addEventListener('click', function() {
    // Obtén los valores de los campos
    var name = document.getElementById('nameInput').getElementsByTagName('input')[0].value;
    var address = document.getElementById('addressInput').getElementsByTagName('input')[0].value;
    var phone = document.getElementById('phoneInput').getElementsByTagName('input')[0].value;
    var email = document.getElementById('emailInput').getElementsByTagName('input')[0].value;
    var password = document.getElementById('passwordInput').getElementsByTagName('input')[0].value;

    // Validación simple (puedes personalizarla según tus necesidades)
    if (!name || !address || !phone || !email || !password) {
        document.getElementById('errorMessage').innerText = 'Falta llenar todos los campos.';
        document.getElementById('successMessage').innerText = '';
    } else {
        // Registro exitoso, muestra el mensaje y redirige a otra página
        document.getElementById('errorMessage').innerText = '';
        document.getElementById('successMessage').innerText = 'Registro exitoso. Redirigiendo...';

        // Puedes redirigir a otra página después de un breve retraso (ejemplo de 2 segundos)
        setTimeout(function() {
            window.location.href = 'otra_pagina.html';
        }, 2000);
    }
});


  
  