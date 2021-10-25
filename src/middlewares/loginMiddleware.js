function loginMiddleware(req, res, next) {
    console.log("LOGIN MIDDLEWARE")
    console.log(req.session.user)
    if(req.session.user != undefined){

        res.redirect("/user/"+req.session.user.user_id);

    }else{

        next();

    }
    

  };

  module.exports = loginMiddleware;