document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "Alex" && password === "Alex123") {
            window.location.href = "index1.html";
        } else if (username === "User" && password === "User123") {
            window.location.href = "watch.html";
        } else if (username === "Avi" && password === "Avi123") {
            window.location.href = "index1.html";
        } else if (username === "Tully" && password === "Tully123") {
            window.location.href = "index1.html";
        } else {
            // Handle invalid login here, e.g., show an error message.
            window.location.href = "amazon.co.uk";        }
    });

const acceptCookiesButton = document.getElementById("accept-cookies");
const declineCookiesButton = document.getElementById("decline-cookies");
const cookieConsent = document.getElementById("cookie-consent");
const overlay = document.createElement("div");
overlay.classList.add("overlay");

acceptCookiesButton.addEventListener("click", function () {
    cookieConsent.style.display = "none"; // Hide the bar when cookies are accepted
    overlay.style.display = "none"; // Hide the overlay
});

declineCookiesButton.addEventListener("click", function () {
    cookieConsent.style.display = "none"; // Hide the bar when cookies are declined
    overlay.style.display = "none"; // Hide the overlay
});

// Display the overlay until the user accepts or declines cookies
overlay.style.display = "block";
document.getElementById("content-wrapper").appendChild(overlay);
