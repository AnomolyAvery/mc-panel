const jwt = require('jsonwebtoken');
const config = require('../app/config');

const generateAccessToken = (user) => {
    const token = jwt.sign(
        {
            sub: user.id,
            username: user.username,
            email: user.email,
            roles: user.roles,
        },
        config.auth.secret,
        {
            expiresIn: '5s',
        }
    );

    return token;
};

const generateRefreshToken = (user) => {
    const token = jwt.sign(
        {
            sub: user.id,
            username: user.username,
            email: user.email,
            roles: user.roles,
        },
        config.auth.refreshSecret,
        {
            expiresIn: '7d',
        }
    );

    return token;
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
};
