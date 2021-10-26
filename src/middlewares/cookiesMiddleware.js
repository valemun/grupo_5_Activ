const db = require("../database/models");

function cookiesMiddleware(req, res, next) {

    if(req.cookies.recordarme != undefined && req.session.user == undefined){
        
        let id = req.cookies.recordarme;

        db.Users.findByPk(id)
        .then((user) => {

            req.session.user = user;
            next();
        })
        
    }
    else{

        next();

    }

  };

  module.exports = cookiesMiddleware;