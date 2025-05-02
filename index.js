

function validateLogin() {
    var accountNumber = document.getElementById('accountNumber').value;
    var password = document.getElementById('password').value;

    // Reset error messages
    document.getElementById('errorMessageAccount');
    document.getElementById('passwordError');

    // Check if either field is empty
    if (accountNumber === '') {
        document.getElementById('errorMessageAccount').innerText = 'Account Number is required.';
        return;
    }
    if (password === '') {
        document.getElementById('errorMessagePassord').innerText = 'Password is required.';
        return;
    }

    // Your validation logic
    if (accountNumber === '5500987152' && password === '100010') {
        // Correct credentials, redirect to index.html
        window.location.href = 'bankpage.html';
    } else {
        // Wrong credentials, show alert
        alert('Wrong account number or password. Please try again.');
    }
}

const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

document.getElementById("logout-link").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Logout clicked. Perform logout actions here.");
});





  const ctx = document.getElementById('myPieChart').getContext('2d');
  const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My Pie Chart',
        data: [30, 50, 20], // percentages
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Sample Pie Chart'
        }
      }
    }
  });

