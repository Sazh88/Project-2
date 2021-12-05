const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const checkoutRoutes = require('checkout-routes')


router.use('/categories', categoryRoutes);
router.use('/checkout', checkoutRoutes);
router.use('/products', productRoutes);

module.exports = router;