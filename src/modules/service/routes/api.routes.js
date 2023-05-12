const express = require("express");
const passport = require("passport");

const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.get(
    "/list",
    passport.authenticate("jwt", { session: false }),
    serviceController.index
);

router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    serviceController.store
);

module.exports = router;
