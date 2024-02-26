document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message")

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        const senha = "123";
        const user = "admin";

        if (username === user && password === senha) {
            errorMessage.textContent = "Login bem-sucedido";
            errorMessage.style.color = "green";
            window.location = "home.html";
        } else {
            errorMessage.textContent = "Nome de usuário/senha incorreta.";
            errorMessage.style.color = "red"
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastro-form");
    const errorMessage = document.getElementById("error-message-cadastro")

    cadastroForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const password = cadastroForm.password.value;
        const confirmpassword = cadastroForm.confirmpassword.value;

        if (password === confirmpassword) {
            errorMessage.textContent = "Cadastro realizado com sucesso !";
            errorMessage.style.color = "green";
        } else {
            errorMessage.textContent = "Senhas são diferentes"
            errorMessage.style.color = "red"
        }

    });
});

