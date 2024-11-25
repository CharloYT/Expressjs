document.addEventListener('DOMContentLoaded', () => {
    console.log('Static JavaScript file loaded!');
   });
   document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in both fields.');
        return;
    }

    // You can add more complex validation or AJAX requests here

    // For demonstration, we will log the values to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // Uncomment the following line to actually submit the form
    // this.submit();
});