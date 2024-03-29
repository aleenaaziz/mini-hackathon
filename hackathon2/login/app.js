import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";

// Your Firebase configuration here
const firebaseConfig = {
    apiKey: "AIzaSyCL-HO4pU4ouEtXzFqtZVeXzYKIEx5YmEg",
    authDomain: "mini-hackathon-78442.firebaseapp.com",
    databaseURL: "https://mini-hackathon-78442-default-rtdb.firebaseio.com",
    projectId: "mini-hackathon-78442",
    storageBucket: "mini-hackathon-78442.appspot.com",
    messagingSenderId: "8649434407",
    appId: "1:8649434407:web:ceecf9bd40eb00ee64f502",
    measurementId: "G-4SVBM7CL21"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = getDatabase(app);

// Function to encode the email address for use as a database path
function encodeEmail(email) {
    return email.replace(".", "_"); // Replace periods with underscores (you can choose another character)
}

// Function to decode the email address back to its original form
function decodeEmail(encodedEmail) {
    return encodedEmail.replace("_", "."); // Replace underscores with periods
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Encode the email before checking the database
        const encodedEmail = encodeEmail(email);

        // Check if the user exists in the database
        checkUserExists(encodedEmail, password);
    });

    // Function to check if the user exists in the database
    function checkUserExists(email, password) {
        const usersRef = ref(database, 'users');

        // Query the database to find a user with the encoded email
        get(child(usersRef, email))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    // User exists, check the password (in a real app, you should hash and compare passwords)
                    const userData = snapshot.val();
                    if (userData.password === password) {
                        // Password matches, redirect to the home page (you can customize this URL)
                        window.location.href = "home.html";
                    } else {
                        alert("Invalid password.");
                    }
                } else {
                    alert("Invalid email or password.");
                }
            })
            .catch((error) => {
                console.error('Error checking user: ', error);
            });
    }
});