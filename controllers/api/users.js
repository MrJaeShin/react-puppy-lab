const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
    create
};

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const token = creatJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

function createJWT(user) {
    return jwt.sign(
        { user },
        process.ene.SECRET,
        { expiresIn: '24h' }
    );
}

