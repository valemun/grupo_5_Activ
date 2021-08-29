//Imortar módulos
const express = require( "express" );
const app     = express();
const path    = require( "path" );
const publicPath = path.resolve( "public" );

//Importar rutas
const indexRouter = require( "./routes/index" );
const productsRouter = require( "./routes/products" );
const userRouter = require( "./routes/user" );

//Definición de archivos estáticos
app.use( express.static( publicPath ));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Correr servidor
app.listen( 3000, () => {
    console.log( "Servidor corriendo" );
});

//Rutas
app.use( "", indexRouter );
app.use( "/products", productsRouter );
app.use( "/user", userRouter );