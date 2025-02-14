const express=  require("express");
const auth = require("../../middlewares/auth");
const { userController } = require("../../controllers");
const router = express.Router()

router.get(
    "/:userId",
    auth,
    userController.getUser
)

router.put(
    "/:userId",
    auth,
    userController.setAddress
)

module.exports = router;