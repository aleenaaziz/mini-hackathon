import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
    import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js";
document.addEventListener('DOMContentLoaded', function () {

    
    
    
    
      // Your web app's Firebase configuration
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

    // Simulate caching username and uid
    var cachedUsername = localStorage.getItem('u.firstName') // Replace with your actual cached username
    var cachedUid = localStorage.getItem('u.id') // Replace with your actual cached UID

    // Get references to form elements
    var usernameField = document.getElementById('username');
    var currentPasswordField = document.getElementById('currentPassword');
    var newPasswordField = document.getElementById('newPassword');
    var confirmPasswordField = document.getElementById('confirmPassword');
    var changePasswordButton = document.getElementById('changePasswordButton');

    // Populate the username field with cached data
    usernameField.value = cachedUsername;

    // Handle button click
    changePasswordButton.addEventListener('click', function () {
        var currentPassword = currentPasswordField.value;
        var newPassword = newPasswordField.value;
        var confirmPassword = confirmPasswordField.value;

        // Check if new password and confirm password match
        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match.');
            return;
        }

        // Here, you would typically send a request to your server to handle database operations securely,
        // but for this example, we'll simulate it with a console log.
        console.log("Simulating password change for UID: " + cachedUid);
        console.log("Current Password: " + currentPassword);
        console.log("New Password: " + newPassword);

        // You can then use Firebase SDK to update the password securely.
        // firebase.auth().currentUser.updatePassword(newPassword).then(function() {
        //     alert('Password updated successfully.');
        // }).catch(function(error) {
        //     alert('Error updating password: ' + error.message);
        // });
    });
});