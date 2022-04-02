const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../app/config');

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization
            ? req.headers.authorization.split(' ')[1]
            : null;

        if (!token) {
            return res.status(401).json({
                message: 'No token provided',
            });
        }

        jwt.verify(token, config.auth.secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: 'Unauthorized',
                });
            }

            req.user = decoded;

            next();
        });
    } catch (err) {
        return res.status(401).json({
            message: 'Unauthorized',
            err: err,
        });
    }
};
