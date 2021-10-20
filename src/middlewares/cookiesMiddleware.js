let users = require( "../data/users.json" );

function cookiesMiddleware(req, res, next) {
    if(req.cookies.recordarme != undefined && req.session.user == undefined){
        
        let id = req.cookies.recordarme;

        let userLog = users.find((user) => {
            return user.id == id
        })

        req.session.user = userLog;
    }

    next();
  };

  module.exports = cookiesMiddleware;