const users = require('../db/users.json');

module.exports = {
    loginUser: (req, res) => {
        const { email, password } = req.body;
        const userIndex = users.findIndex((user) => user.email === email && user.password === password);

        if (userIndex !== -1) {
            res.redirect(`/users/${userIndex}`);
            return;
        }

        res.require('/registration');
    },

    getLoginForm: (req, res) => {
        res.json('get.login form');
    },
};
