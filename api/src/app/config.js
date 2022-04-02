require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    auth: {
        secret: process.env.AUTH_SECRET || 'secret',
        refreshSecret: process.env.AUTH_REFRESH_SECRET || 'refreshSecret',
    },
};

module.exports = config;
