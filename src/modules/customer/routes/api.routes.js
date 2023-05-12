const express = require("express");
const passport = require("passport");

const router = express.Router();
const customerController = require("../controllers/customerController");

router.get(
    "/list",
    passport.authenticate("jwt", { session: false }),
    customerController.index
);

router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    customerController.store
);

module.exports = router;
