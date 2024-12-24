document.addEventListener('DOMContentLoaded', function() {
    const switchForms = document.querySelectorAll('.switch-form');
    const signupForm = document.querySelector('.sign-up');
    const loginForm = document.querySelector('.login');

    switchForms.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            if (target === 'login') {
                signupForm.classList.add('hidden');
                loginForm.classList.remove('hidden');
            } else {
                loginForm.classList.add('hidden');
                signupForm.classList.remove('hidden');
            }
        });
    });

    // Accessibility controls
    const fontSizeToggle = document.getElementById('font-size-toggle');
    const highContrastToggle = document.getElementById('high-contrast-toggle');
    let isLargeFont = false;
    let isHighContrast = false;

    fontSizeToggle.addEventListener('click', () => {
        if (isLargeFont) {
            document.body.style.fontSize = '1rem';
            isLargeFont = false;
        } else {
            document.body.style.fontSize = '1.2rem';
            isLargeFont = true;
        }
    });

    highContrastToggle.addEventListener('click', () => {
        if (isHighContrast) {
            document.documentElement.style.setProperty('--primary-color', '#CE1126');
            document.documentElement.style.setProperty('--secondary-color', '#000000');
            document.documentElement.style.setProperty('--accent-color', '#FFFFFF');
            document.documentElement.style.setProperty('--background-color', '#F5F5F5');
            document.documentElement.style.setProperty('--text-color', '#333333');
            isHighContrast = false;
        } else {
            document.documentElement.style.setProperty('--primary-color', '#FFFFFF');
            document.documentElement.style.setProperty('--secondary-color', '#000000');
            document.documentElement.style.setProperty('--accent-color', '#FFFF00');
            document.documentElement.style.setProperty('--background-color', '#000000');
            document.documentElement.style.setProperty('--text-color', '#FFFFFF');
            isHighContrast = true;
        }
    });

    // Form submission (for demonstration purposes)
    const signupFormEl = document.getElementById('signup-form');
    const loginFormEl = document.getElementById('login-form');

    signupFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Sign up form submitted');
        alert('Sign up successful! Please check your email to verify your account.');
    });

    loginFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Login form submitted');
        alert('Login successful! Redirecting to dashboard...');
    });
});

