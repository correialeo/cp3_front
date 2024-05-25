document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".formLogin");
    const errorMessage = document.querySelector(".error-message");

    const users = [
        { email: "ale@cp3.com", password: "123senha" },
        { email: "leandro@cp3.com", password: "123senha" }
    ];

    localStorage.setItem("users", JSON.stringify(users));

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const storedUsers = JSON.parse(localStorage.getItem("users"));

        const user = storedUsers.find(user => user.email === email && user.password === password);

        if (user) {
            sessionStorage.setItem("loggedIn", true);
            sessionStorage.setItem("loginSuccessMessage", "Login realizado com sucesso!");
            window.location.href = "index.html";
        } else {
            errorMessage.style.display = "block";

            setTimeout(() => {
                errorMessage.style.display = "none";
            }, 5000);
        }
    });
});
