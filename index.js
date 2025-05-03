function validateLogin() {
  const accountNumber = document.getElementById('accountNumber').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorAccount = document.getElementById('errorAccount');
  const errorPassword = document.getElementById('errorPassword');

  errorAccount.textContent = '';
  errorPassword.textContent = '';

  if (!accountNumber) {
    errorAccount.textContent = 'Account number is required.';
    return;
  }

  if (!password) {
    errorPassword.textContent = 'Password is required.';
    return;
  }

  if (accountNumber === '5500987152' && password === '1000101') {
    const loaderModal = new bootstrap.Modal(document.getElementById("loaderModal"));
    loaderModal.show();

    setTimeout(() => {
      window.location.href = 'bankpage.html';
    }, 5000);
  } else {
    alert('Incorrect account number or password.');
  }
}
