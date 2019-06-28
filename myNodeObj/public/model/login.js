class models {
    constructor() {
        this.userName = '123';
        this.userPwd = '123'
    }
    getUserName() {
        return this.userName;
    }
    getUserPwd() {
        return this.userPwd;
    }
}

module.exports = new models();