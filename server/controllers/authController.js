const bcrypt = require('bcrypt');

module.exports = {
    register: async (req, res) => {
        const {username, email, password} = req.body;
        const db = req.app.get('db');
        const result = await db.users.find_user_by_username([username]);
        const existingUser = result[0];
        if (existingUser) {
            return res.status(409).send('Username taken');
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registeredUser = await db.users.create_user([username, email, hash]);
        const user = registeredUser[0];
        console.log(user)
        req.session.user = {username: user.username, email: user.email, id: user.user_id};
        return res.status(201).send(req.session.user);
    },

    login: async (req, res) => {
        const {username, password} = req.body;
        const foundUser = await req.app.get('db').users.find_user_by_username([username]);
        const user = foundUser[0];
        console.log(user)
        if(!user) {
            return res.status(401).send('User not found');
        }
        console.log(password, user.hash)
        const isAuthenticated = bcrypt.compareSync(password, user.password);
        if(!isAuthenticated) {
            return res.status(403).send('Incorrect password');
        }
        req.session.user = {username: user.username, email: user.email, id: user.user_id};
        return res.send(req.session.user);
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }
};