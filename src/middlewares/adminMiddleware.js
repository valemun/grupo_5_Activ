function adminMiddleware (req, res, next) {

    if(req.session.user != undefined && req.session.user.tipo == "admin"){
            
            next();

    }else{

        if(req.session.user == undefined){

            res.redirect("/user/login");

        }else{

            res.redirect("/");

        }
    }
    

  };

  module.exports = adminMiddleware;