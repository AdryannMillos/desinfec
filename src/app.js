const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use cors() middleware function to enable CORS
app.use(cors());

require("./modules/login/middleware/auth");

app.use("/api/v1", require("./modules/login/routes/api.routes"));
app.use("/api/v1/user", require("./modules/user/routes/api.routes"));
app.use("/api/v1/customer", require("./modules/customer/routes/api.routes"));
app.use("/api/v1/service", require("./modules/service/routes/api.routes"));
app.use(
    "/api/v1/customer-historic",
    require("./modules/customerHistoric/routes/api.routes")
);

module.exports = app;
