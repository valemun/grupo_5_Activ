const express = require( "express" );
const router = express.Router();

const userController = require( "../controllers/userController" );

/* Carrito */
router.get( "/cart", userController.cart );

/* Sign in y sign up */
router.get( "/login", userController.login );


router.get( "/register", userController.register );
router.post("/", userController.create);

/* Perfil de usuario */
router.get( "/:id", userController.profile );


module.exports = router;