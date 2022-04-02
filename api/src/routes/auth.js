const { Router } = require('express');
const { login, profile, refresh, logout } = require('../controllers/auth');
const auth = require('../middleware/auth');
const roles = require('../middleware/roles');

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/refresh', refresh);
authRouter.post('/logout', auth, logout);
authRouter.get('/profile', auth, profile);

authRouter.get('/roles', auth, roles(['admin']), (req, res) => {
    res.json({
        message: 'You have access',
    });
});

module.exports = authRouter;
