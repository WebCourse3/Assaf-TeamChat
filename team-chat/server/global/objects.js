'use strict';

const users = require("../db/usersList");
const usersHandler = require("../db/usersHandler");

module.exports.usersHandler = new usersHandler(users); //does this define a new herosHandler everytime?
