const userService = require('../services/user.service')
const login = async (req, res) => {
    const { user, password } = req.body;
    const isUser = {
        user,
        password
    }
    const isLoggedIn = await userService.login(isUser);
    if (isLoggedIn == null) {
        res.status(401).send({
            message: "Datos incorrectos"
        });
    } else {
        if (isLoggedIn.flag) {
            const token = await generateToken.tokenSign(isLoggedIn?.user);
            res.status(200).send({
                token,
            });
            return;
        }
    }
}

module.exports = {
    login
}