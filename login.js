document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (email === "sandeep@gmail.com" && password === "sandeep00") {
        window.location.href = "index.html"; // Redirect to properties page
    } else {
        errorMessage.textContent = "Invalid email or password. Please try again.";
    }
});
