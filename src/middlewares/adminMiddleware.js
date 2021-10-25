function adminMiddleware (req, res, next) {

    if(req.session.user != undefined && req.session.user.user_type == 1){
            
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