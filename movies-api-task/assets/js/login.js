const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loggedIn = await loginUser(email, password);
    
    if (loggedIn) {

        alert('Login successful!');
 
        window.location.href = 'index.html';
    } else {
        alert('Login failed.');
    }
});

async function loginUser(email, password) {
    return true;
}
