const path = require( "path" );
let productos = require( "../data/product.json" );


const controller = {

    profile: (req, res) => {
        res.render( "users/register" );
    },

    cart: (req, res) => {
        res.render( "users/cart", {"productos":productos} );
    },

    login: (req, res) => {
        res.render( "users/login" );
    },
    
    register: (req, res) => {
        res.render( "users/register" );
    }
}

module.exports = controller;