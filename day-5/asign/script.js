/* =========================================
   Generic Input String Validation Function
   ========================================= */

function isValidInputString(str, minLen, maxLen) {
    if (typeof str !== "string") {
        return false;
    }

    const trimmed = str.trim();

    if (trimmed.length < minLen || trimmed.length > maxLen) {
        return false;
    }

    const allowedPattern = /^[a-zA-Z0-9@._]+$/;
    if (!allowedPattern.test(trimmed)) {
        return false;
    }

    const letterOrNumberPattern = /[a-zA-Z0-9]/;
    if (!letterOrNumberPattern.test(trimmed)) {
        return false;
    }

    return true;
}


/* =========================================
   Login Form Validation & Dummy Authentication
   ========================================= */

document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const errorMessage  = document.getElementById("error");

        const username = usernameInput.value;
        const password = passwordInput.value;

        errorMessage.textContent = "";

        /* ---------- Username Validation ---------- */
        if (!isValidInputString(username, 5, 50)) {
            errorMessage.textContent =
                "Username must be 5–50 characters and contain only letters, numbers, @ . _";
            return;
        }

        /* ---------- Password Validation ---------- */
        if (password.trim().length < 6) {
            errorMessage.textContent =
                "Password must be at least 6 characters long.";
            return;
        }

        /* ---------- Dummy Inbuilt Credentials ---------- */
        const BUILT_IN_USERNAME = "scientist@gmail.com";
        const BUILT_IN_PASSWORD = "admin123";

        /* ---------- Credential Comparison ---------- */
        if (
            username.trim() === BUILT_IN_USERNAME &&
            password === BUILT_IN_PASSWORD
        ) {
            alert("Login successful");
            // window.location.href = "home.html";
        } else {
            errorMessage.textContent =
                "Invalid username or password.";
        }
    });
