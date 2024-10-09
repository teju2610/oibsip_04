document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    errorMessage.textContent = '';
    successMessage.textContent = '';
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
    } else if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
    } else {
        successMessage.textContent = 'Account created successfully!';
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        setTimeout(() => {
            window.location.href = "log.html";
        }, 2000);  
    }
});
