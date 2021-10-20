function loginMiddleware(req, res, next) {
    if(req.session.user != undefined){

        res.redirect("/user/"+req.session.user.id);

    }else{

        next();

    }
    

  };

  module.exports = loginMiddleware;