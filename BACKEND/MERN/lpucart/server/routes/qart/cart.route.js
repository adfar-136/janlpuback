const express = require("express");
const { cartController } = require("../../controllers/index");
const auth = require("../../middlewares/auth");
const router = express.Router();

router.get("/",auth, cartController.getCart);

router.post("/",auth,cartController.addProductToCart )

router.put("/",auth,cartController.updateProductInCart)


module.exports = router