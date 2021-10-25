const db = require("../database/models");

function cookiesMiddleware(req, res, next) {
    console.log("MIDDLEWARE COOKIES")
    console.log(req.session.user)
    console.log(req.cookies.recordarme)

    if(req.cookies.recordarme != undefined && req.session.user == undefined){
        
        let id = req.cookies.recordarme;
        console.log("ID")
        console.log(id)

        db.Users.findByPk(id)
        .then((user) => {
            req.session.user = user;
            console.log("QUE ONDA")
            console.log(req.session.user)
            next();
        })
        
    }
    else{

        console.log("OTRA ONDA")
        console.log(req.session.user)

        next();

    }

  };

  module.exports = cookiesMiddleware;