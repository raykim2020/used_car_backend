const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/cart');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// GET /api/orders/history
router.get('/history', async function history(req, res) {
    // Sort most recent orders first
    try {
        const orders = await Order
            .find({ user: req.user._id, isPaid: true })
            .sort('-updatedAt').exec();
        res.status(200).json(orders);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }

});

// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
//PUT add to cart
router.put('/cart/user/:userId/add/:itemId', ordersCtrl.addToCart)
module.exports = router;