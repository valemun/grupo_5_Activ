const express = require( "express" );
const router = express.Router();

const productController = require( "../controllers/productController" );

router.get( "/", productController.list );
router.get( "/:id", productController.detail );
router.get( "/:id/edit", productController.create );
router.get( "/create", productController.edit );

module.exports = router;