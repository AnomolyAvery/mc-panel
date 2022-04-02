const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../app/config');
const {
    generateAccessToken,
    generateRefreshToken,
} = require('../services/auth');

const users = [
    {
        id: 1,
        username: 'AveryS',
        email: 'ashawsolutions@gmail.com',
        password: 'password',
        roles: ['admin'],
    },
];

let refreshTokens = [];

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const login = async (req, res) => {
    const { email, username, password } = req.body;

    //Check to make sure email or username is not empty
    if (!email && !username) {
        return res.status(400).json({
            message: 'Please enter an email or username',
        });
    }

    //Check to make sure password is not empty
    if (!password) {
        return res.status(400).json({
            message: 'Please enter a password',
        });
    }

    const user = users.find(
        (x) => x.email === email || x.username === username
    );

    if (!user || user.password !== password) {
        return res.status(401).json({
            message: 'User not found',
        });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);
    return res.json({
        username: user.username,
        email: user.email,
        roles: user.roles,
        accessToken,
        refreshToken,
    });
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const refresh = async (req, res) => {
    const refreshToken = req.body.token;

    if (!refreshToken) {
        return res.status(401).json({
            message: 'Unauthorized',
        });
    }

    const isValidToken = refreshTokens.includes(refreshToken);
    if (!isValidToken) {
        console.log('invalid token');
        return res.status(401).json({
            message: 'Invalid token',
        });
    }

    try {
        jwt.verify(refreshToken, config.auth.refreshSecret, (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(401).json({
                    message: 'Unauthorized',
                });
            }

            const user = users.find((x) => x.id === decoded.sub);

            if (!user) {
                return res.status(401).json({
                    message: 'Unauthorized',
                });
            }

            refreshTokens = refreshTokens.filter(
                (token) => token !== refreshToken
            );

            const accessToken = generateAccessToken(user);
            const rToken = generateRefreshToken(user);

            refreshTokens.push(rToken);

            return res.status(200).json({
                accessToken,
                refreshToken: rToken,
            });
        });
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            message: 'Unauthorized',
            err: err,
        });
    }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const profile = async (req, res) => {
    const { user } = req;

    return res.json({
        username: user.username,
        email: user.email,
        roles: user.roles,
    });
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const logout = async (req, res) => {
    const refreshToken = req.body.token;
    const refreshIdx = refreshTokens.indexOf(refreshToken);
    refreshTokens.splice(refreshIdx, 1);
    return res.status(200).json({
        message: 'Successfully logged out',
    });
};

module.exports = {
    login,
    refresh,
    profile,
    logout,
};
