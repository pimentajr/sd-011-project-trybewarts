const loginField = document.querySelector('#login-field');
const passwordField = document.querySelector('#password-field');
const loginButton = document.querySelector('#login-button');

function alertLogin() {
  if (loginField.value === 'tryber@teste.com' && passwordField.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
}

loginButton.addEventListener('click', alertLogin);
