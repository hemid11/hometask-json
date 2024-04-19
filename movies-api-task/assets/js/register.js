const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const registered = await registerUser(username, email, password);
    
    if (registered) {

        alert('Registration successful!');

        window.location.href = 'login.html';
    } else {
        alert('Registration failed. Please try again later.');
    }
});

async function registerUser(username, email, password) {
   
    return true;
}
