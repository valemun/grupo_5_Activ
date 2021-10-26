//Importar módulos
const path = require( "path" );
const express = require( "express" );
const router = express.Router();
const multer = require( "multer" );
const db = require("../database/models");
const bcrypt = require( "bcryptjs" );
const { body } = require( "express-validator" );

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

//Validaciones express-validator
const validacionesRegister = [
  body("nombre")
    .notEmpty().withMessage("Debes incluir un nombre").bail()
    .isLength({min:2}).withMessage("El nombre debe tener al menos 2 carácteres"),

  body("apellido")
    .notEmpty().withMessage("Debes incluir un apellido").bail()
    .isLength({min:2}).withMessage("El apellido debe tener al menos 2 carácteres"),

  body("fecha")
    .notEmpty().withMessage("Debes incluir fecha de nacimiento").bail()
    .isDate().withMessage("Debe ser un formato de fecha válido"),

  body("correo")
    .notEmpty().withMessage("Debes incluir un correo").bail()
    .isEmail().withMessage("Debe ser un email válido").bail()
    .custom((value, {req}) => {
      return db.Users.findOne({
        where: {
          user_email: req.body.correo
        }
      })
      .then((user) => {
        if(user!=undefined){
          throw new Error("Ese correo ya está registrado");
        }else{
          return true;
        }
      })
    }).withMessage("Ese correo ya está registrado"),

  body("contra")
    .notEmpty().withMessage("Debes incluir una contraseña").bail()
    .isLength({min:8}).withMessage("La contraseña debe tener al menos 8 carácteres").bail()
    .matches(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "i").withMessage("La contraseña debe incluir mayúsculas, minúsculas y un número"),

  body("imagen")
    .optional()
    .custom((value, {req}) => {
      if(req.files.mimetype === "image/jpg" || req.files.mimetype === "image/jpeg" || req.files.mimetype === "image/png"){
        return "good";
      }else{
        return false;
      }
    }).withMessage("Solo se aceptan archivos JPG, JPEG y PNG"),

  body("terminos")
    .notEmpty().withMessage("Debes aceptar los términos y condiciones")
];

const validacionLogin = [
  body("correo")
    .notEmpty().withMessage("Debes incluir un correo").bail()
    .isEmail().withMessage("Debe ser un email válido").bail()
    .custom((value, {req}) => {
      return db.Users.findOne({
        where: {
          user_email: req.body.correo
        }
      })
      .then((user) => {
        if(user!=undefined){
          return true;
        }else{
          throw new Error("Ese correo no está registrado");
        }
      })
    }).withMessage("Ese correo no está registrado"),

  body("contra")
    .notEmpty().withMessage("Debes incluir una contraseña").bail()
    .custom((value, {req}) => {
      return db.Users.findOne({
        where: {
          user_email: req.body.correo
        }
      })
      .then((user) => {
        if(bcrypt.compareSync(req.body.contra, user.dataValues.user_password)) {
          return true;
        }else{
          throw new Error("El correo o la contraseña no son correctas");
        }
      })
    }).withMessage("El correo o la contraseña no son correctas")
];

const validacionesEdit = [
  body("nombre")
    .notEmpty().withMessage("Debes incluir un nombre").bail()
    .isLength({min:2}).withMessage("El nombre debe tener al menor 2 carácteres"),

  body("apellido")
    .notEmpty().withMessage("Debes incluir un apellido").bail()
    .isLength({min:2}).withMessage("El apellido debe tener al menor 2 carácteres"),

  body("fecha")
    .notEmpty().withMessage("Debes incluir fecha de nacimiento").bail()
    .isDate().withMessage("Debe ser un formato de fecha válido"),

  body("imagen")
    .optional()
    .custom((value, {req}) => {

      if(req.files.mimetype === "image/jpg" || req.files.mimetype === "image/jpeg" || req.files.mimetype === "image/png"){
        return "good";
      }else{
        return false;
      }
    }).withMessage("Solo se aceptan archivos JPG, JPEG y PNG")
]

//RUTAS

// Carrito
router.get( "/cart", userController.cart );

// Sign in
router.get( "/login", loginMiddleware, userController.login );
router.post( "/login", validacionLogin, userController.sesion );


//Sign up
router.get( "/register", loginMiddleware, userController.register );
router.post("/register", upload.single("imagen"), validacionesRegister, userController.create);

// Perfil de usuario
router.get( "/:id", userController.profile );

//Editar perfil
router.get( "/:id/edit", userController.edit );
router.put( "/:id", upload.single("imagen"), userController.update );


module.exports = router;