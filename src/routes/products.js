const express = require( "express" );
const router = express.Router();

const productController = require( "../controllers/productController" );

router.get( "/list/:categoria", productController.list );
router.get( "/:id", productController.detail );
router.get( "/:id/edit", productController.edit );
router.get( "/add/new", productController.create );

module.exports = router;