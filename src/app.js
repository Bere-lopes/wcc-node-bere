const express = require("express");
const app = express();

app.use(express.json());

app.use(function (req, res, next)  {
    res. header("Access-Control-Allow-Origin", "*");
    res. header(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-With, Cont-Type, Accept"
    );
    next();
});
module.exports = app;