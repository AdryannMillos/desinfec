const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    app.use(cors());

    next();
});
require("./modules/login/middleware/auth");

app.use("/api/v1", require("./modules/login/routes/api.routes"));
app.use("/api/v1/user", require("./modules/user/routes/api.routes"));

module.exports = app;
