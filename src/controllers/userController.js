const path = require( "path" );
const fs = require( "fs" );
let productos = require( "../data/product.json" );
let users = require( "../data/users.json" );


const controller = {

    //Perfil de usuario
    profile: (req, res) => {

        let id = req.params.id;

        let user = users.find((user) => {
            return user.id == id
        })

        res.render( "users/profile", {"user": user, "productos":productos} );
    },

    //Carrito
    cart: (req, res) => {
        res.render( "users/cart", {"productos":productos} );
    },

    //Login y Regisro
    login: (req, res) => {
        res.render( "users/login" );
    },
    
    register: (req, res) => {
        res.render( "users/register" );
    },

    create: (req, res) => {

        let newId = 0;
        newId = users[users.length-1].id + 1;

        let user = {
            id: newId,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.correo,
            password: req.body.contra,
            tipo: "user",
            imagen: "/images/users/user_6.png",
        }

        users.push(user);

        let usersJSON = JSON.stringify(users);

        fs.writeFileSync(path.resolve( "src/data/users.json" ), usersJSON);

        res.redirect( "/user/"+newId );
    },
}

module.exports = controller;