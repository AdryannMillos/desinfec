const express = require("express");
const passport = require("passport");

const router = express.Router();
const customerHistoricController = require("../controllers/customerHistoricController");

router.get(
    "/list",
    passport.authenticate("jwt", { session: false }),
    customerHistoricController.index
);

router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    customerHistoricController.store
);

module.exports = router;
