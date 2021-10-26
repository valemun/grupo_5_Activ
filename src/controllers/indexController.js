const path = require( "path" );
const db = require("../database/models");


const controller = {
    
    home: (req, res) => {

        db.Products.findAll()
        .then((productos) => {

            res.render( "index", {"productos":productos} );

        });
        
    }

}

module.exports = controller;