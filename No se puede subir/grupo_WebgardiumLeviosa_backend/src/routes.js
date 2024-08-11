const Router = require('koa-router');
const configDotenv = require('dotenv');
const jwtMiddleware = require('koa-jwt');
const users = require('./routes/users.js');
const games = require('./routes/games.js');
const players = require('./routes/players.js');
const settlement = require('./routes/settlement.js');
const road = require('./routes/road.js');
const authRoutes = require('./routes/authentication.js');

configDotenv.config();

const router = new Router();

// router.use('/games', games.routes());
router.use('/players', players.routes());
router.use('/settlement', settlement.routes());
router.use('/road', road.routes());
router.use(authRoutes.routes());

router.use(jwtMiddleware({ secret: process.env.JWT_SECRET }));
router.use('/users', users.routes());
router.use('/games', games.routes());

module.exports = router;
