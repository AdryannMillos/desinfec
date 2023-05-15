/* eslint-disable no-console */
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 8009;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
