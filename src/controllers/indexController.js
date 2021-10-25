const path = require( "path" );
const db = require("../database/models");


const controller = {
    
    home: (req, res) => {

        db.Products.findAll()
        .then((productos) => {

            res.render( "index", {"productos":productos} );

        });
        
    },

    db: (req, res) => {
        
        db.Products.findAll({
            include: [
                {model: db.Categories, as: "product_category_info"},
                {model: db.CategoryTypes, as: "product_type_info"}, 
                {model: db.Sizes, as: "product_sizes_info"},
                {model: db.Colors, as: "product_colors_info"}  
        ]})
        .then((resultados) => {
            res.send(resultados);
        });
        
        
    },

    cart: (req, res) => {
        
        db.Users.findAll({
            include: [
                {model: db.UserTypes, as: "user_type_info"}
            ],
            where: {
                user_email: "tessa@miranda.com"
            }
        })
        .then((resultados) => {

            res.send(resultados);

        });
        
        
    }
}

module.exports = controller;