document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = registeredUsers.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem('username', username);
        window.location.href = 'secured.html'; 
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.color = 'red'; 
    }
});
