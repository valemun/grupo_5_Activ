const path = require( "path" );
let productos = require( "../data/product.json" );
let reviews = require( "../data/reviews.json" );


const controller = {

    list: (req, res) => {
        res.render( "products/productList", {"productos":productos} );
    },

    new: (req, res) => {
        res.render( "products/productCreate" );
    },

    create: (req, res) => {
        res.render( "products/productCreate" );
    },

    detail: (req, res) => {

        let id = req.params.id;

        let producto = productos.find((producto) => {
            return producto.id == id
        })

        res.render( "products/productDetail",  {"producto":producto, "productos":productos, "review":reviews} );
    },

    edit: (req, res) => {
        res.render( "products/productCreate" );
    },

    update: (req, res) => {
        res.render( "products/productCreate" );
    },
    
    delete: (req, res) => {
        res.render( "products/productCreate" );
    }
}

module.exports = controller;