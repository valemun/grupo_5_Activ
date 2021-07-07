const path = require( "path" );

const controller = {
    list: (req, res) => {
        res.sendFile( path.resolve( "src/views/products/productList.html" ) );
    },
    detail: (req, res) => {
        res.sendFile( path.resolve( "src/views/products/productDetail.html" ) );
    },
    create: (req, res) => {
        res.sendFile( path.resolve( "src/views/products/productCreate.html" ) );
    },
    edit: (req, res) => {
        res.sendFile( path.resolve( "src/views/products/preoductEdit.html" ) );
    }
}

module.exports = controller;