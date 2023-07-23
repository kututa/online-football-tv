[
  {
    "id": 1,
    "league": "English Premier League",
    "teams": "Manchester United vs. Liverpool",
    "status": "Ongoing",
    "time": "14:30"
  },
  {
    "id": 2,
    "league": "La Liga",
    "teams": "Barcelona vs. Real Madrid",
    "status": "Upcoming",
    "time": "19:00"
  },
  // Add more matches as needed...
]




// LOGIN FORM 


document.getElementById('show-login-form').addEventListener('click', function() {
  const email = window.prompt('Enter your email:');
  if (email) {
    // Validate the entered email (you can use a regular expression for basic validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      // Email is valid
      console.log('Entered email:', email);

      // You can now use the email for further processing or authentication
      // For example, send the email to a backend server for verification,
      // redirect the user to the login page, or display a welcome message.

      // Example: Redirect the user to a login page
      window.location.href = '/login'; // Replace '/login' with the actual URL of your login page
    } else {
      // Invalid email format
      window.alert('Invalid email format. Please enter a valid email.');
    }
  }
});



