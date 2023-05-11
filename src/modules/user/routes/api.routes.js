const express = require("express");
const passport = require("passport");

const router = express.Router();
const userController = require("../controllers/userController");

router.get(
    "/list",
    passport.authenticate("jwt", { session: false }),
    userController.index
);

router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    userController.store
);

module.exports = router;
