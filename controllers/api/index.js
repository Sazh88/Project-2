const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const emailRoutes = require('./email-routes.js');

router.use('/user', userRoutes);
router.use('/email', emailRoutes);

module.exports = router;