const formTitle = document.getElementById('form-title');
const userForm = document.getElementById('user-form');
const toggleText = document.getElementById('toggle-text');

let isRegistering = true;

toggleText.addEventListener('click', () => {
    isRegistering = !isRegistering;

    if (isRegistering) {
        formTitle.textContent = 'Registro';
        userForm.querySelector('button').textContent = 'Registrar';
        userForm.reset(); 
        toggleText.textContent = '¿Ya tienes cuenta? Iniciar sesión';
    } else {
        formTitle.textContent = 'Iniciar Sesión';
        userForm.querySelector('button').textContent = 'Iniciar Sesión';
        userForm.reset(); 
        toggleText.textContent = '¿No tienes cuenta? Registrarse';
    }
});

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (isRegistering) {
        alert('Usuario registrado: ' + document.getElementById('username').value);
    } else {
        alert('Inicio de sesión para: ' + document.getElementById('username').value);
    }
    userForm.reset();
});