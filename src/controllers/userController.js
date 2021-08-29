const path = require( "path" );

const controller = {
    profile: (req, res) => {
        res.render( "productList" );
    },
    cart: (req, res) => {
        res.render( "cart" );
    },
    login: (req, res) => {
        res.render( "login" );
    },
    register: (req, res) => {
        res.render( "register" );
    }
}

module.exports = controller;