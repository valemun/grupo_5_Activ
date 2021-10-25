function sessionMiddleware(req, res, next) {

    if(req.session.user != undefined){
        console.log("MIDDLEWARE SESION")
        console.log(req.session.user)
        res.locals.session = req.session.user;
        console.log(res.locals.session)
    }
    
    next();
  };

  module.exports = sessionMiddleware;