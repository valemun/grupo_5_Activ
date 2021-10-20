const express = require( "express" );
const router = express.Router();

const productController = require( "../controllers/productController" );

//Importar middlewares
const adminMiddleware = require( "../middlewares/adminMiddleware" );


/* Listado de producto */
router.get( "/", productController.list );

/* Crear producto */
router.get( "/new", adminMiddleware, productController.new );
router.post( "/", productController.create );

/* Detalle de producto */
router.get( "/:id", productController.detail );

/* Edicion de producto */
router.get( "/:id/edit", adminMiddleware, productController.edit );
router.put( "/:id", productController.update );

/* Borrar producto */
router.delete( "/:id", productController.delete );

module.exports = router;