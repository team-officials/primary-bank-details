 function validateLogin() {
    const account = document.getElementById('accountNumber').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorAccount = document.getElementById('errorAccount');
    const errorPassword = document.getElementById('errorPassword');

    errorAccount.textContent = '';
    errorPassword.textContent = '';

    let valid = true;

    if (account.length < 8 || isNaN(account)) {
      errorAccount.textContent = 'Enter a valid account number (min 8 digits)';
      valid = false;
    }

    if (password !== '1010111101$!') {
      errorPassword.textContent = 'Enter Valid Password!"';
      valid = false;
    }

    if (valid) {
      if (account === "9876543210") {
        // Show loading modal (add modal HTML if needed)

        setTimeout(() => {
          window.location.href = '/bankpage.html';
        }, 20000); // 20 seconds delay
      } else {
        alert('Login successful (dummy validation)');
        window.location.href = '/bankpage.html';
      }
    }
  }