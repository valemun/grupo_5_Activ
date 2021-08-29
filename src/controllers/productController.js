const path = require( "path" );

const controller = {
    list: (req, res) => {
        res.render( "products/productList" );
    },
    detail: (req, res) => {
        res.render( "products/productDetail" );
    },
    create: (req, res) => {
        res.render( "products/productCreate" );
    },
    edit: (req, res) => {
        res.render( "products/productEdit" );
    }
}

module.exports = controller;