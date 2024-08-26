
  document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');
  
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      // Get user input
      const email = emailInput.value;
      const password = passwordInput.value;
  
      // Store credentials
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
  
      alert('Sign up successful! You can now log in.');
      window.location.href = 'login.html'; // Redirect to login page
    });
  });
    