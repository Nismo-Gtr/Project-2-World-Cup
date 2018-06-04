// File not connected to login.js
// var login = require("./login");

// Check for user credentials match
app.post("/authenticate", function (req, res) {
    console.log("request", req.body)
    // getting http body from client which contains the captured user credentials. 
    // make sql query (or check in firebase) for matching credentials. 

        // connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [req.body.burgerName, req.body.devoured], function (err, result) {
        //     if (err) {
        //         return res.status(500).end();
        //     }

        //     // Send back the ID of the new todo
        //     res.json({ id: result.insertId, devoured: false });
        //     console.log({ id: result.insertId });
        // });
});