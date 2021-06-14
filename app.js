//importación de módulos
const express = require( "express" );
const path    = require( "path" );

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
    res.sendFile( path.resolve( "views/index.html" ));
})

app.get( "/product", (req, res) => {
    res.sendFile( path.resolve( "views/productDetail.html" ));
})

app.get( "/cart", (req, res) => {
    res.sendFile( path.resolve( "views/shoppingCart.html" ));
})

//estas los tenemos en una pagina junta, a ver que nos dicen los profes para ver como la hacemos
app.get( "/register", (req, res) => {
    res.sendFile( path.resolve( "views/register.html" ));
})

app.get( "/login", (req, res) => {
    res.sendFile( path.resolve( "views/login.html" ));
})
