document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if credentials match
    if (email === "sandeep@gmail.com" && password === "sandeep00") {
        alert("Login successful! Redirecting...");
        window.location.href = "index.html"; // Redirect to index.html
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
