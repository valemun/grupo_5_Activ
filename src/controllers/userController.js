const path = require( "path" );

const controller = {
    profile: (req, res) => {
        res.render( "users/register" );
    },
    cart: (req, res) => {
        res.render( "users/cart" );
    },
    login: (req, res) => {
        res.render( "users/login" );
    },
    register: (req, res) => {
        res.render( "users/register" );
    }
}

module.exports = controller;