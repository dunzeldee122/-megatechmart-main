function toggleForm() {
    var signupForm = document.getElementById('signup-form');
    var signinForm = document.getElementById('signin-form');

    if (signupForm.style.display === 'none') {
    signupForm.style.display = 'block';
    signinForm.style.display = 'none';
    } else {
    signupForm.style.display = 'none';
    signinForm.style.display = 'block';
    }
}


