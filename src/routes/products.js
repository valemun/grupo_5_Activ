//Importar módulos
const express = require( "express" );
const router = express.Router();
const { body } = require( "express-validator" );

const productController = require( "../controllers/productController" );

//Importar middlewares
const adminMiddleware = require( "../middlewares/adminMiddleware" );

//Validaciones Express-Validator
const validacionesProduct = [
    body("nombre")
      .notEmpty().withMessage("Debes incluir un nombre").bail()
      .isLength({min:5}).withMessage("El nombre debe tener al menos 5 carácteres"),

    body("desc")
      .notEmpty().withMessage("Debes incluir una descripción").bail()
      .isLength({min:20}).withMessage("La descripción debe tener al menos 20 carácteres"),

    body("mainPic")
        .optional()
        .custom((value, {req}) => {

            console.log("HOLA")
            console.log(value)

            if(req.body.mainPic == "") {
                return "good";
            }
            else{
                if(req.files.mimetype === "image/jpg" || req.files.mimetype === "image/jpeg" || req.files.mimetype === "image/png"){
                    return "good";
            }else{
                    return false;
            }
            }
        }),

    body("thumbnail")
        .optional()
        .custom((value, {req}) => {

            if(req.body.mainPic == "") {
                return "good";
            }
            else{
                if(req.files.mimetype === "image/jpg" || req.files.mimetype === "image/jpeg" || req.files.mimetype === "image/png"){
                    return "good";
            }else{
                    return false;
            }
            }
        })

    ]

//RUTAS
// Listado de producto
router.get( "/", productController.list );

// Crear producto
router.get( "/new", productController.new );
router.post( "/", validacionesProduct, productController.create );

// Detalle de producto
router.get( "/:id", productController.detail );

// Edicion de producto
router.get( "/:id/edit", productController.edit );
router.put( "/:id", validacionesProduct, productController.update );

// Borrar producto
router.delete( "/:id", productController.delete );

module.exports = router;