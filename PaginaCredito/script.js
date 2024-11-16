document.getElementById('registerForm').addEventListener('submit', function (e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      e.preventDefault(); // Cancela el envío del formulario
      alert('Las contraseñas no coinciden. Por favor, verifica e inténtalo nuevamente.');
    }
  });
  