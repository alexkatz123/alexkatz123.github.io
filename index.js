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

const acceptCookiesButton = document.getElementById("accept-cookies");
const declineCookiesButton = document.getElementById("decline-cookies");
const cookieConsent = document.getElementById("cookie-consent");
const overlay = document.createElement("div");
overlay.classList.add("overlay");

acceptCookiesButton.addEventListener("click", function () {
    cookieConsent.style.display = "none"; 
    overlay.style.display = "none"; 
});

declineCookiesButton.addEventListener("click", function () {
    cookieConsent.style.display = "none";
    overlay.style.display = "none"; 
});

overlay.style.display = "block";
document.getElementById("content-wrapper").appendChild(overlay);
