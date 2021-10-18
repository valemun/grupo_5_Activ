const path = require( "path" );
let productos = require( "../data/product.json" );


const controller = {
    
    home: (req, res) => {
        res.render( "index", {"productos":productos} );
    }
}

module.exports = controller;