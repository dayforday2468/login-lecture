"use strict"

const UserStorage = require("./Userstorage");

class Users {
  constructor(body) {
    this.body = body;
  }
  login() {
    const { id, psword } = UserStorage.getUserInfo(this.body.id);
    if (id) {
      if (psword == this.body.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." }
    }
    return { success: false, msg: "존재하지 않는 아이디입니다." }
  };
};

module.exports = Users;