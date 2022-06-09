const Order = require('../../models/cart');
const User = require('../../models/User');
const Item = require('../../models/shopItem');

module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout,
    history,
    addToCart,
    buyCart
};

// A cart is the unpaid order for a user
async function cart(req, res) {
    try {
        const cart = await Order.getCart(req.user._id);
        res.status(200).json(cart);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// Add an item to the cart
async function addToCart(req, res) {
    try {
        const cart = await Order.getCart(req.user._id);
        await cart.addItemToCart(req.params.id);
        res.status(200).json(cart);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
    try {
        const cart = await Order.getCart(req.user._id);
        await cart.setItemQty(req.body.itemId, req.body.newQty);
        res.status(200).json(cart);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
    try {
        const cart = await Order.getCart(req.user._id);
        cart.isPaid = true;
        await cart.save();
        res.status(200).json(cart);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

// Return the logged in user's paid order history
async function history(req, res) {
    // Sort most recent orders first
    try {
        const orders = await Order
            .find({ user: req.user._id, isPaid: true })
            .sort('-updatedAt').exec();
        res.status(200).json(orders);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }

}
async function buyCart(req, res) {
    try {
        const currentUser = await User.findById(req.params.id)
        currentUser.orderHistory = [...currentUser.orderHistory, ...currentUser.shoppingCart]
        currentUser.shoppingCart = []
        await currentUser.save()
        res.status(200).json('working')
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}
//This is made for my App
async function addToCart(req, res) {
    try {
        const currentUser = await User.findById(req.params.userId);
        currentUser.shoppingCart.push(req.params.itemId)
        await currentUser.save();
        res.status(200).json(currentUser.shoppingCart);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}
