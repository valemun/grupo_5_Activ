function sessionMiddleware(req, res, next) {

    if(req.session.user != undefined){

        res.locals.session = req.session.user;

    }
    
    next();
  };

  module.exports = sessionMiddleware;