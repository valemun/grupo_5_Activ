//importación de módulos
const express = require( "express" );
const path    = require( "path" );

//routes
const productsRouter = require( "./routes/products" );

const app     = express();

//Definición de archivos estáticos
const publicPath = path.resolve( "public" );
app.use( express.static( publicPath ));

//Correr servidor
app.listen( 3000, () => {
    console.log( "Servidor corriendo" );
});

//Rutas
app.get( "/", (req, res) => {
    res.sendFile( path.resolve( "src/views/index.html" ));
})

app.use( "/products", productsRouter );

app.get( "/cart", (req, res) => {
    res.sendFile( path.resolve( "src/views/shoppingCart.html" ));
})

app.get( "/register", (req, res) => {
    res.sendFile( path.resolve( "src/views/register.html" ));
})

app.get( "/login", (req, res) => {
    res.sendFile( path.resolve( "src/views/users/login.html" ));
})
