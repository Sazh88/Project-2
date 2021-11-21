const router = require('express').Router();
const apiRoutes = require('./api');
const { Product } = require('../models');

const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// GET one product
router.get('/product/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
      console.log('hello');
    try {
      const dbProductData = await Product.findByPk(req.params.id);

      const product = dbProductData.get({ plain: true });
      console.log('hi');
      res.render('product', { product});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    
  }
});


module.exports = router;