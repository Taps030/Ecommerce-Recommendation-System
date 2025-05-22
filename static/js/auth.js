const API_URL = "http://127.0.0.1:5500"; // Flask backend URL

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("login-form").addEventListener("submit", (e) => handleAuth(e, "/login", "login-email", "login-password", true));
    document.getElementById("register-form").addEventListener("submit", (e) => handleAuth(e, "/register", "register-email", "register-password", false));
});

async function handleAuth(event, endpoint, emailId, passwordId, isLogin) {
    event.preventDefault(); // Prevent page refresh

    const email = document.getElementById(emailId).value.trim();
    const password = document.getElementById(passwordId).value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (result.success) {
            alert(result.message);
            localStorage.setItem("user", email); // Store user session

            if (isLogin && result.redirect) {
                window.location.href = result.redirect; // Redirect after successful login
            }
        } else {
            alert(result.message); // Show error messages
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server error. Please try again later.");
    }
}