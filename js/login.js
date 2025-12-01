// Toggle between Sign-In and Sign-Up forms
document.getElementById('go-to-signup').addEventListener('click', function (e) {
    e.preventDefault();
    toggleForms('sign-in-form', 'sign-up-form');
});

document.getElementById('go-to-signin').addEventListener('click', function (e) {
    e.preventDefault();
    toggleForms('sign-up-form', 'sign-in-form');
});

// Redirect after Sign-In or Sign-Up
document.getElementById('sign-in-btn').addEventListener('click', redirectToHome);
document.getElementById('sign-up-btn').addEventListener('click', redirectToHome);

// Toggle visibility of forms
function toggleForms(hideFormId, showFormId) {
    document.getElementById(hideFormId).classList.add('hidden');
    document.getElementById(showFormId).classList.remove('hidden');
}

//redirect to homepage (index.html) 
function redirectToHome() {
    window.location.href = "index.html";
}
