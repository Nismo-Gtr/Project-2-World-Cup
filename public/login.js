// capture data from form. compare it to username and password saved in database. 
// Firebase or MySQL? Use Firebase for authentication and storing user credentials. 
// Write firebase code here. 
$("#loginButton").on("click", function () {
    event.preventDefault();

    var userCredentials = {
        email: $("#userID").val().trim(),
        password: $("#password").val().trim()
    }

    console.log("userCredentials", userCredentials);

    // if (userCredentials.email && userCredentials.password) {
        // Send the POST request.
        $.ajax("/authenticate", {
            type: "POST",
            data: userCredentials
        }).then(function (response) {
            console.log("About to check user credentials in firebase now");
            // Reload the page to get the updated list
            // location.reload();
            console.log(response);
        });
    
        
    // }

});

// signup page
// oauth2 page for facebook, twitter and google. 
