// scripts.js
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-btn').classList.add('active');
    document.getElementById('register-btn').classList.remove('active');
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('register-btn').classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
}

// Set default view to login
showLogin();
