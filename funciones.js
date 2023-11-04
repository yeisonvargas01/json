function validarFormulario() {
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
  
    if (nombres === '' || apellidos === '' || correo === '') {
      alert('Por favor complete todos los campos');
      return false; 
    }
  
    return true; 
  }

  document.getElementById('mi-enlace').addEventListener('click', function(event) {
    event.preventDefault(); // 
    alert('¡Has hecho clic en el enlace!');
  });
  
  