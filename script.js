function checkPassword() {
  const password = document.querySelector('#password');
  const confirm = document.querySelector('#confirm');
  if (confirm.value === password.value) {
    confirm.setCustomValidity('');
  } else {
    confirm.setCustomValidity('Passwords do not match');
  }
}