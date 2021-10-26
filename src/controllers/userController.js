const path = require( "path" );
const fs = require( "fs" );
const db = require("../database/models");
const bcrypt = require( "bcryptjs" );
const { validationResult } = require( "express-validator" );


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

        let errores = validationResult(req);

        if(!errores.isEmpty()){

            res.render("users/login", {"errores": errores.mapped(), "old":req.body })

        }
        else{

        let usuarioLog = null;

        db.Users.findOne({
            where: {
                user_email: req.body.correo
            }
        })
        .then((user) => {
            
            if(bcrypt.compareSync(req.body.contra, user.dataValues.user_password)) {
                usuarioLog = user.dataValues;

                if(req.body.recordar != undefined){
                    res.cookie("recordarme", usuarioLog.user_id, { maxAge: 60000 });
                }
            }

            if(usuarioLog!=null){
                req.session.user = usuarioLog;
                res.redirect( "/" );
            }
            else{
                res.redirect( "/user/login" );
            }

        })
        }
        
    },

    //Registro    
    register: (req, res) => {
        res.render( "users/register" );
    },

    create: (req, res) => {

        let errores = validationResult(req);

        if(!errores.isEmpty()){

            res.render("users/register", {"errores": errores.mapped(), "old":req.body });

        }
        else{

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

        }

    },
}

module.exports = controller;