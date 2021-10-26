const express = require( "express" );
const router = express.Router();

const apiController = require( "../controllers/apiController" );

router.get( "/users", apiController.userList );

router.get( "/users/:id", apiController.userDetail );

router.get( "/products", apiController.productList );

router.get( "/products/last", apiController.productLast );

router.get( "/products/:id", apiController.productDetail );

module.exports = router;