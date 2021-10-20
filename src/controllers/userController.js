const path = require( "path" );
const fs = require( "fs" );
const bcrypt = require( "bcryptjs" );
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

    //Login
    login: (req, res) => {
        res.render( "users/login" );
    },

    sesion: (req, res) => {
        let usuarioLog = null;

        for(let i = 0; i < users.length; i++){
            if(users[i].email == req.body.correo && bcrypt.compareSync(req.body.contra, users[i].password)) {
                usuarioLog = users[i];

                if(req.body.recordar != undefined){
                    res.cookie("recordarme", users[i].id, { maxAge: 60000 });
                }

                break;
            }
        }

        if(usuarioLog!=null){
            req.session.user = usuarioLog;
            console.log("Se logró");
            res.redirect( "/" );
        }
        else{
            res.redirect( "/user/login/" );
        }
        
    },

    //Registro    
    register: (req, res) => {
        res.render( "users/register" );
    },

    create: (req, res) => {

        let newId = 0;
        newId = users[users.length-1].id + 1;

        let imgName = (req.file ? "/images/users/"+req.file.filename : "/images/users/user_5.png");

        let contra = bcrypt.hashSync(req.body.contra, 12);

        console.log(req.body);

        let user = {
            id: newId,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.correo,
            password: contra,
            fechaNac: req.body.fecha,
            tipo: "user",
            imagen: imgName,
        }

        users.push(user);

        let usersJSON = JSON.stringify(users);

        fs.writeFileSync(path.resolve( "src/data/users.json" ), usersJSON);

        res.redirect( "/user/"+newId );
    },
}

module.exports = controller;