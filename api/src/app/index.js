const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const mainRouter = require('../routes');
const config = require('./config');

const createApp = () => {
    const app = express();

    app.use(morgan('dev'));

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(
        cors({
            origin: 'http://localhost:3000',
            credentials: true,
        })
    );

    app.use('/api', mainRouter);

    app.use((req, res) => {
        return res.status(404).json({
            message: 'Not found',
        });
    });

    app.port = config.port;

    app.start = (cb) => {
        app.listen(config.port, () => {
            cb();
        });
    };

    return app;
};

module.exports = createApp;
