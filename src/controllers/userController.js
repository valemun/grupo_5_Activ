const path = require( "path" );
const fs = require( "fs" );
const db = require("../database/models");
const bcrypt = require( "bcryptjs" );


const controller = {

    //Perfil de usuario
    profile: (req, res) => {

        db.Users.findByPk(req.params.id, {include: [
            {model: db.UserTypes, as: "user_type_info"},
        ]})
        .then((user) =>{

            db.Products.findAll()
            .then((productos) => {

                res.render( "users/profile", {"user": user, "productos":productos} );

            })

        })
        
    },

    edit: (req, res) => {

        db.Users.findByPk(req.params.id, {include: [
            {model: db.UserTypes, as: "user_type_info"},
        ]})
        .then((user) =>{

            res.render( "users/profileEdit", {"user": user});

        })

        
    },

    update: (req, res) => {

        if(req.file){

            let imgName = "/images/users/"+req.file.filename;

            db.Users.update({

                user_firstname: req.body.nombre,
                user_lastname: req.body.apellido,
                user_email: req.body.correo,
                user_dob: req.body.fecha,
                user_avatar: imgName
    
            },
            {
                where: {
                    user_id: req.params.id
                }
            })
            .then((user) => {
    
                res.redirect( "/user/"+req.params.id);
    
            })

        }
        else {

            db.Users.update({

                user_firstname: req.body.nombre,
                user_lastname: req.body.apellido,
                user_email: req.body.correo,
                user_dob: req.body.fecha    
            },
            {
                where: {
                    user_id: req.params.id
                }
            })
            .then((user) => {
    
                res.redirect( "/user/"+req.params.id);
    
            })

        }

        
        
    },

    //Carrito
    cart: (req, res) => {

        db.Products.findAll()
        .then((productos) => {

            res.render( "users/cart", {"productos":productos} );

        });
        
    },

    //Login
    login: (req, res) => {
        res.render( "users/login" );
    },

    sesion: (req, res) => {

        let usuarioLog = null;

        db.Users.findOne({
            where: {
                user_email: req.body.correo
            }
        })
        .then((user) => {
            
            if(bcrypt.compareSync(req.body.contra, user.dataValues.user_password)) {
                usuarioLog = user.dataValues;

                console.log(usuarioLog);
                console.log(usuarioLog.user_id);
                console.log("QUE ESTA PASANDOOO");
                console.log(req.body.recordar);

                if(req.body.recordar != undefined){
                    console.log(usuarioLog.user_id);
                    res.cookie("recordarme", usuarioLog.user_id, { maxAge: 60000 });
                }
            }

            console.log("QUE ONDA");
            console.log(usuarioLog);

            if(usuarioLog!=null){
                req.session.user = usuarioLog;
                console.log("session xd")
                console.log(req.session.user)
                console.log("FIN")
                res.redirect( "/" );
            }
            else{
                res.redirect( "/user/login/" );
            }

        })
        
    },

    //Registro    
    register: (req, res) => {
        res.render( "users/register" );
    },

    create: (req, res) => {

        let imgName = (req.file ? "/images/users/"+req.file.filename : "/images/users/user_5.png");

        let contra = bcrypt.hashSync(req.body.contra, 12);

        db.Users.create({

            user_type: 2,
            user_firstname: req.body.nombre,
            user_lastname: req.body.apellido,
            user_email: req.body.correo,
            user_password: contra,
            user_dob: req.body.fecha,
            user_avatar: imgName

        })
        .then((user) => {

            req.session.user = user;

            res.redirect( "/user/"+user.user_id );

        })

    },
}

module.exports = controller;