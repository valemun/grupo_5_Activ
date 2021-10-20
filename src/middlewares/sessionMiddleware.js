function sessionMiddleware(req, res, next) {
    if(req.session.user != undefined){
        res.locals.user = req.session.user;
    }
    
    next();
  };

  module.exports = sessionMiddleware;