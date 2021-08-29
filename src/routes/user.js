const express = require( "express" );
const router = express.Router();

const userController = require( "../controllers/userController" );

router.get( "/:id", userController.profile );
router.get( "/cart", userController.cart );
router.get( "/login", userController.login );
router.get( "/register", userController.register );

module.exports = router;