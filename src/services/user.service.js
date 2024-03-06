const User = require('../database/models/user.model');
const bcrypt = require('bcrypt');
const login = async (newUser) => {
    const { user, password } = newUser;
    try {
        const userFound = await User.findOne().where({ username: user });
        if (userFound == null) {
            return null;
        }
        const isPassword = bcrypt.compare(password, userFound.password);
        if (!userFound && !isPassword) {
            return false;
        }
        return {
            flag: true,
            user: userFound,
        };
    } catch (error) {
        return error;
    }
}



module.exports = {
    login
}