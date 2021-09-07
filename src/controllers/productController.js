const path = require( "path" );
let productos = require( "../data/product.json" );
let reviews = require( "../data/reviews.json" );


const controller = {
    list: (req, res) => {
        res.render( "products/productList", {"productos":productos} );
    },
    detail: (req, res) => {

        let id = req.params.id;

        let producto = productos.find((producto) => {
            return producto.id == id
        })

        res.render( "products/productDetail",  {"producto":producto, "productos":productos, "review":reviews} );
    },
    create: (req, res) => {
        res.render( "products/productCreate" );
    },
    edit: (req, res) => {
        res.render( "products/productEdit" );
    }
}

module.exports = controller;