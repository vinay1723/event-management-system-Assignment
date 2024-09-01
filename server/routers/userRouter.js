const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

// router.use(authController.protect);
router.patch("/updateMyPassword", authController.updatePassword);

module.exports = router;
