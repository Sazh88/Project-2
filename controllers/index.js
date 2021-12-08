const router = require('express').Router();

const apiRoutes = require('./api');
const { Product } = require('../models');

const homeRoutes = require('./del');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// router.use('/business', )

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});


module.exports = router;