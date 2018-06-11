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

firebase.auth().signOut();


$(document).ready(function () {

    // User profile that is loaded
    var currentUser;
    var userDisplayName;
    $('#logoutButton').hide();
    var loginRequest = false;
    var signupRequest = false;



    $("#loginButton").on("click", function () {
        event.preventDefault();

        // Capturing user email and password and saving to local temporary object
        var userCredentials = {
            email: $("#loginID").val().trim(),
            password: $("#loginPassword").val().trim()
        }

        // Send the POST request.
        if (userCredentials.email && userCredentials.password) {
            $.ajax("/authenticate", {
                type: "POST",
                data: userCredentials
            }).then(function (response) {
                console.log("About to check user credentials in firebase now");
                // Reload the page to get the updated list
                // location.reload();
                console.log("POST response: ", response);
                // console.log("response.email: ", response.email);
                // console.log("response.password: ", response.password);

                // check the database for existing user by matching email/password pairs
                database.ref('/users').on("value", function (snapshot) {
                    data = snapshot.val();
                    // console.log("DATA: ", data);
                    // console.log("==========================");
                    var keys = Object.keys(data);
                    console.log('login keys', keys);
                    for (var i = 0; i < keys.length; i++) {
                        // console.log("data[keys[i]].email", data[keys[i]].email);
                        if (response.email === data[keys[i]].email && response.password === data[keys[i]].password) {
                            console.log("username and password combinations EXISTS");
                            currentUser = {
                                id: [keys[i]],
                                email: data[keys[i]].email,
                                username: data[keys[i]].username
                            }

                            console.log('currentUser: ', currentUser);
                            console.log(data[keys[i]]);
                            
                            $('#loginModal').modal('hide');
                            $('#signupModal').modal('hide');
                            $('#loginModalButton').hide();
                            $('#signupModalButton').hide();
                            
                            // we can go ahead and redirect to another view here using data from currentUser.
                            localStorage.setItem('currentUser', JSON.stringify(currentUser));
                            window.location.replace('/userDashboard');
                        }
                    }
                });

            });


        }

    });

    // Sign Up is via username, email and password
    $("#signupButton").on("click", function () {
        event.preventDefault();

        // Capturing user email and password and saving to local temporary object
        var userCredentials = {
            username: $("#userName").val().trim(),
            email: $("#userEmail").val().trim(),
            password: $("#userPassword").val().trim()
        }

        // // Adding Firebase Auth
        // const auth = firebase.auth();
        // // Sign in with email and password
        // const promise = auth.createUserWithEmailAndPassword(userCredentials.email, userCredentials.password);
        // // This logs an error if above sign in is unsuccessful
        // promise.catch(e => console.log(e.message));

        // Send the POST request if sign up is via username, email and password
        if (userCredentials.username && userCredentials.email && userCredentials.password) {
            $.ajax("/authenticate", {
                type: "POST",
                data: userCredentials
            }).then(function (response) {
                console.log("About to check user credentials in firebase now");
                // Reload the page to get the updated list
                // location.reload();
                userDisplayName = response.username;
                console.log("POST response: ", response);
                console.log('We have a new user');
                console.log("response.username", response.username);
                console.log("response.email: ", response.email);
                console.log("response.password: ", response.password);
                // This will create a new user in the database
                database.ref('/users').push(response);
                // $('#logoutButton').show();
                // $('#loggedInUser').text('Welcome ' + userDisplayName);
                // $('#loginModal').modal('hide');
                // $('#signupModal').modal('hide');
                // $('#loginModalButton').hide();
                // $('#signupModalButton').hide();

                // Put the object into local storage. This is only activated if user doesn't sign up using social media. 
                localStorage.setItem('currentUser', JSON.stringify(userCredentials));
                window.location.replace('/userDashboard');

            });
        }

    });

    // Add a realtime listener for auth state change
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {

            displayName = firebaseUser.displayName;
            var email = firebaseUser.email;
            var emailVerified = firebaseUser.emailVerified;
            var photoURL = firebaseUser.photoURL;
            var isAnonymous = firebaseUser.isAnonymous;
            var uid = firebaseUser.uid;
            var providerData = firebaseUser.providerData;

            // Capturing user info and saving to a temporary object
            // only thing that all social media auth and modal form auth have in common is username. we will check for username. 
            var userCredentials = {
                username: displayName,
                email: email,
                password: uid
            }

            //Send POST request to save user information in firebase database
            $.ajax("/authenticate", {
                type: "POST",
                data: userCredentials
            }).then(function (response) {
                console.log("About to check user credentials in firebase now");
                // Reload the page to get the updated list
                // location.reload();
                console.log("POST response: ", response);
                // console.log('We have a new user');
                console.log("response.username", response.username);
                console.log("response.email: ", response.email);
                console.log("response.password: ", response.password);

                // now, we will verify if user is trying to login or sign up. 
                // if user is logging in, we will not make a new entry into database. we will look in the existing database
                // and find user account. 
                if (loginRequest) {

                }
                // if user is signing up, we will make a new user entry into the database. 



                database.ref('/users').push(response);
                
                currentUser = response;
                console.log('currentUser: ', currentUser);

                
                console.log('stringify:', JSON.stringify(currentUser));
                // Put the object into local storage
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                console.log('localstorage: ', localStorage);
                if(localStorage.currentUser) {
                    console.log('localStorige :', localStorage);
                }
                
                window.location.replace('/userDashboard');
                
            });

        } else {
            console.log('no user logged in');
            $('#logoutButton').hide();
            $('#loginModalButton').show();
            $('#signupModalButton').show();
            $('#loggedInUser').empty();
        }
    });

    // LOGOUT BUTTON
    $('#logoutButton').on('click', e => {
        firebase.auth().signOut();
    });

    // Firebase Google Login
    $(".googleButtonLogin").on("click", function () {
        console.log('clicked google in login modal');
        loginRequest = true;
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    });

    // Firebase Google SignUp
    $(".googleButton").on("click", function () {
        console.log('clicked google');
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    });

    // Firebase Twitter Login 
    $(".twitterButton").on("click", function () {
        console.log('clicked twitter');
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            var token = result.credential.accessToken;
            var secret = result.credential.secret;

            console.log(token);
            console.log(user);
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    });

    // Firebase Facebook Login 
    $(".facebookButton").on("click", function () {
        console.log('clicked facebook');
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    });

});