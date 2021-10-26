function loginMiddleware(req, res, next) {
    
    if(req.session.user != undefined){

        res.redirect("/user/"+req.session.user.user_id);

    }else{

        next();

    }
    

  };

  module.exports = loginMiddleware;