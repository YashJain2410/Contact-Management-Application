const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).send("Get all contacts");
});

module.exports = router;