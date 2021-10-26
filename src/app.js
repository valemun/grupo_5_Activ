//Importar módulos
const express = require( "express" );
const app     = express();
const path    = require( "path" );
const publicPath = path.resolve( "public" );
const methodOverride = require( "method-override" );
const session = require( "express-session" );
const cookieParser = require( "cookie-parser" );
const cors = require( "cors" );

//Importar middlewares
const cookiesMiddleware = require( "./middlewares/cookiesMiddleware" );
const sessionMiddleware = require( "./middlewares/sessionMiddleware" );

//Importar rutas
const indexRouter = require( "./routes/index" );
const productsRouter = require( "./routes/products" );
const userRouter = require( "./routes/user" );
const apiRouter = require( "./routes/api" );

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

//Cors
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))
 
//Middlewares
app.use( cookiesMiddleware );
app.use( sessionMiddleware );

//Correr servidor
app.listen( 3001, () => {
    console.log( "Servidor corriendo" );
});

//Rutas
app.use( "/", indexRouter );
app.use( "/user", userRouter );
app.use( "/products", productsRouter );
app.use( "/api", apiRouter );

