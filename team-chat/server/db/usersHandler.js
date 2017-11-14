'use strict';
const User = require("../models/user");
class usersHandler {
  constructor(users) {
    this.users = users;
  }
  getUsers() {
    return this.users;
  }
  getUserByName(username) {
    return this.users.find(user => user.username == username);
  }
  userExists (username) {
    return this.users.filter(user => user.username == username).length === 1;
  }
  validateUser (username, password) {
    return this.users.filter(user => user.username === username && user.password === password).length === 1;
  }

  addUser(username, password) {
    if (this.userExists(username)) {
      throw new Error("user with username already exists");
    }
    else {
      this.users.push(new User(username, password));
    }
  }

}
module.exports = usersHandler;
//# sourceMappingURL=herosHandler.js.map
