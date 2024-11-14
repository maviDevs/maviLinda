// Função para alternar entre os formulários de login e cadastro
function toggleForms() {
    document.getElementById("login-form").classList.toggle("hidden");
    document.getElementById("signup-form").classList.toggle("hidden");
}

// Validação de Login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (validateEmail(email) && validatePassword(password)) {
        alert("Login realizado com sucesso!");
    } else {
        alert("Email ou senha inválidos!");
    }
});

// Validação de Cadastro
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-password-confirm").value;

    if (!validateEmail(email)) {
        alert("Email inválido!");
        return;
    }
    if (!validatePassword(password)) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return;
    }
    if (password !== confirmPassword) {
        alert("As senhas não correspondem!");
        return;
    }

    alert("Cadastro realizado com sucesso!");
});

// Função para validar o formato do email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Função para validar a senha (mínimo de 6 caracteres)
function validatePassword(password) {
    return password.length >= 6;
}
