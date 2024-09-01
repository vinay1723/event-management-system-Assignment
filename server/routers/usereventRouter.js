const express = require("express");
const router = express.Router();
const userEventController = require("../controllers/userEventController");
const authController = require("../controllers/authController");

router.route("/events").get(userEventController.getAllEvents);
// router.use(authController.protect);
router
  .route("/:userid")
  .get(userEventController.getAllUsersEvents)
  .post(userEventController.createUserEvent)
  .patch(userEventController.updateUserEvent)
  .delete(userEventController.deleteUserEvent);

module.exports = router;
