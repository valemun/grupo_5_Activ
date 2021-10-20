//Importar módulos
const express = require( "express" );
const app     = express();
const path    = require( "path" );
const publicPath = path.resolve( "public" );
const methodOverride = require( "method-override" );
const session = require( "express-session" );
const cookieParser = require( "cookie-parser" );

//Importar rutas
const indexRouter = require( "./routes/index" );
const productsRouter = require( "./routes/products" );
const userRouter = require( "./routes/user" );

//Definición de archivos estáticos
app.use( express.static( publicPath ));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//CRUD
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());
//app.use( (req, res, next) => {
//    res.status(404).render("not-found")
// });
app.use(methodOverride("_method"))

//Session y Cookies
app.use(session( {secret: "Activ guarda tus secretos", resave: true,
saveUninitialized: true}));
app.use(cookieParser());

//Correr servidor
app.listen( 3000, () => {
    console.log( "Servidor corriendo" );
});

//Rutas
app.use( "/", indexRouter );
app.use( "/user", userRouter );
app.use( "/products", productsRouter );
