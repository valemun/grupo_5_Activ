const path = require( "path" );
const db = require("../database/models");
let productos = require( "../data/product.json" );


const controller = {
    
    home: (req, res) => {
        res.render( "index", {"productos":productos} );
    },

    db: (req, res) => {
        
        db.CartProducts.findAll()
        .then((resultados) => {
            res.send(resultados);
        });
        
    },
}

module.exports = controller;