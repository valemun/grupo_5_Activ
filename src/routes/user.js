const path = require( "path" );
const express = require( "express" );
const multer = require( "multer" );
const router = express.Router();

const userController = require( "../controllers/userController" );

//Importar middlewares
const loginMiddleware = require( "../middlewares/loginMiddleware" );

//Configuracion Multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.resolve( "public/images/users" );
        console.log(folder);
        callback(null, folder)
      },
      filename: (req, file, callback) => {
        let fileName = "user_"+ Date.now() + path.extname(file.originalname);
        callback(null, fileName)
      }
});

const upload = multer({ storage: storage });

// Carrito
router.get( "/cart", userController.cart );

// Sign in y sign up
router.get( "/login", loginMiddleware, userController.login );
router.post( "/login", userController.sesion );


router.get( "/register", loginMiddleware, userController.register );
router.post("/", upload.single("imagen"),userController.create);

// Perfil de usuario
router.get( "/:id", userController.profile );


module.exports = router;