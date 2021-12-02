const { Router } = require("express");
const router = Router();

const authController = require("./controllers/auth");
const dashController = require("./controllers/dash");

router.get("/", authController.login);
router.post("/attempt", authController.attempt);
router.get("/logout", authController.logout);
router.get("/register", authController.register);
router.post("/register", authController.store);
router.get("/admin", dashController.home);

module.exports = router;