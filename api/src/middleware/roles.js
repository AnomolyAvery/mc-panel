const express = require('express');

/**
 *
 * @param {string[]} roles
 * @returns
 */
const roles = (roles) => {
    /**
     *
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     */
    const validate = (req, res, next) => {
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }

        const userRoles = user.roles;

        if (!userRoles) {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }

        const hasRole = () => {
            return userRoles.some((role) => roles.includes(role));
        };

        if (!hasRole()) {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }

        next();
    };

    return validate;
};

module.exports = roles;
