// navbar.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading the navbar:', error));
  });
  