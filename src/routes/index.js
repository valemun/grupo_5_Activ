const express = require( "express" );
const router = express.Router();

const indexController = require( "../controllers/indexController" );

router.get( "/", indexController.home );

router.get( "/db/prueba", indexController.db );

module.exports = router;