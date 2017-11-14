const express = require('express')

let usersRouter = express.Router()
let usersHandler = require('../global/objects').usersHandler;

let response = {
  status: 200,
  data: [],
  message: null
};
/*
        response.data = users;
        res.json(response);

 */
usersRouter.route('/login')
  .get(function (req, res) {
    res.json(usersHandler.getUsers());
  })
  .post(function(req, res)
    {
      let userName = req.body.name;
      let userPassword = req.body.password;

      if(usersHandler.validateUser(userName, userPassword)) {
          res.send(true);
      } else {
          res.send(false);
      }
    }
  )

module.exports = usersRouter;
