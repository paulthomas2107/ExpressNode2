var express = require("express");
var router = express.Router();

let landing = require("../controllers/landing");

/* Routes */
router.get("/", landing.get_landing);
router.post("/", landing.submit_lead)

module.exports = router;
