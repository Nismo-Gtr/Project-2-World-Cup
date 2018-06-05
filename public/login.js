// capture data from form. compare it to username and password saved in database. 
// Firebase or MySQL? Use Firebase for authentication and storing user credentials. 
// Write firebase code here. 

// 1. Initialize Firebase
var firebase_config = {
    apiKey: "AIzaSyA5y8GqPO0dVFs5xshZiFdjKgVgN9OlO0M",
    authDomain: "world-cup-2018-2e7ca.firebaseapp.com",
    databaseURL: "https://world-cup-2018-2e7ca.firebaseio.com",
    projectId: "world-cup-2018-2e7ca",
    storageBucket: "world-cup-2018-2e7ca.appspot.com",
    messagingSenderId: "621397211278"
};

firebase.initializeApp(firebase_config);
var database = firebase.database();


$(document).ready(function () {

    // User profile that is loaded
    var currentUser;

    $("#loginButton").on("click", function () {
        event.preventDefault();

        // Capturing user email and password and saving to local temporary object
        var userCredentials = {
            email: $("#loginID").val().trim(),
            password: $("#loginPassword").val().trim()
        }

        console.log("userCredentials", userCredentials);

        // This whole things works even without a post request. Is a post request necessary? 

        // Send the POST request.
        // if (userCredentials.email && userCredentials.password) {
        $.ajax("/authenticate", {
            type: "POST",
            data: userCredentials
        }).then(function (response) {
            console.log("About to check user credentials in firebase now");
            // Reload the page to get the updated list
            // location.reload();
            // console.log("POST response: ", response);
            // console.log("response.email: ", response.email);
            // console.log("response.password: ", response.password);

            // check the database for matching email/password pairs
            database.ref().on("value", function (snapshot) {
                data = snapshot.val();
                // console.log("DATA: ", data);
                // console.log("==========================");
                var keys = Object.keys(data);
                for (var i = 0; i < keys.length; i++) {
                    // console.log("data[keys[i]].email", data[keys[i]].email);
                    if (response.email === data[keys[i]].email && response.password === data[keys[i]].password) {
                        console.log("username and password combinations EXISTS");
                        currentUser = [keys[i]];
                        console.log(currentUser);
                        // add username for each user. then you can access currentUser.username
                    }
                }
            });

        });


        // }

    });

    // signup page

    $("#signupButton").on("click", function () {
        event.preventDefault();

        // Capturing user email and password and saving to local temporary object
        var userCredentials = {
            username: $("#userName").val().trim(),
            email: $("#userEmail").val().trim(),
            password: $("#userPassword").val().trim()
        }

        console.log("userCredentials", userCredentials);

        // Send the POST request.
        // if (userCredentials.email && userCredentials.password) {
        $.ajax("/authenticate", {
            type: "POST",
            data: userCredentials
        }).then(function (response) {
            console.log("About to check user credentials in firebase now");
            // Reload the page to get the updated list
            // location.reload();
            console.log("POST response: ", response);
            console.log("response.username", response.username);
            console.log("response.email: ", response.email);
            console.log("response.password: ", response.password);
            database.ref().push(response);

        });


        // }

    });

    // oauth2 page for facebook, twitter and google.

});