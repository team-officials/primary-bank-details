function validateSignup() {
     // Reset errors
     document.getElementById('errorFullName').textContent = '';
     document.getElementById('errorUsername').textContent = '';
     document.getElementById('errorAccount').textContent = '';
     document.getElementById('errorPassword').textContent = '';
     document.getElementById('errorConfirmPassword').textContent = '';
 
     const fullName = document.getElementById('fullName').value;
     const username = document.getElementById('username').value;
     const accountNumber = document.getElementById('accountNumber').value;
     const password = document.getElementById('password').value;
     const confirmPassword = document.getElementById('confirmPassword').value;
     
     let isValid = true;
 
     if (!fullName) {
         document.getElementById('errorFullName').textContent = 'Full Name is required';
         isValid = false;
     }
 
     if (!username) {
         document.getElementById('errorUsername').textContent = 'Username is required';
         isValid = false;
     }
 
     if (!accountNumber) {
         document.getElementById('errorAccount').textContent = 'Account Number is required';
         isValid = false;
     }
 
     if (!password) {
         document.getElementById('errorPassword').textContent = 'Password is required';
         isValid = false;
     }
 
     if (password !== confirmPassword) {
         document.getElementById('errorConfirmPassword').textContent = 'Passwords do not match';
         isValid = false;
     }
 
     if (isValid) {
         alert('Sign-up successful');
     }
 }
 