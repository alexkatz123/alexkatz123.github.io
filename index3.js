const container = document.getElementById('container');
const registerBtn = document.getElementById('Register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "Alex" && password === "Alex123") {
            window.location.href = "choose.html";
        } else if (username === "User" && password === "User123") {
            window.location.href = "watch.html";
        } else if (username === "Avi" && password === "Avi123") {
            window.location.href = "choose.html";
        } else if (username === "Tully" && password === "Tully123") {
            window.location.href = "choose.html";
        } else if (username === "Avmo" && password === "Avmo123") {
            window.location.href = "choose.html";
        } else if (username === "AY" && password === "AY123") {
            window.location.href = "choose.html";
        }else {
            window.location.href = "dont-touch.html";        }
    });
