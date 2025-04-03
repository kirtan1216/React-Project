const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.route("/userForm").post(userController.userForm);

module.exports = router;
