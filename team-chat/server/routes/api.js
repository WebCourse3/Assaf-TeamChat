const express = require('express')

var router = express.Router()

//other routes
var users = require('./usersRoute')

//configure other routes
router.use('/users', users)

//router routes
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res) {
  res.send('API HOME PAGE')
})

module.exports = router;
