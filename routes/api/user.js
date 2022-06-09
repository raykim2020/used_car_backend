const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const User = require("../../models/User")

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
//GET
// router.get('/:userId', usersCtrl.getLogin);

router.get("/", (req, res) => {
    User.find({}, (err, foundUsers) => {
        if (!err) {
            res.status(200).json(foundUsers)
        } else {
            res.status(400).json(err)
        }
    })
})
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).populate('shoppingCart').populate('orderHistory')

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(400).json('wrong!')
    }

})

// router.get('/:id', (req, res) => {

//     const query = User.findById(req.params.id).populate(

//         'shoppingCart'


//     )
//     query.exec((err, foundUser) => {
//         if (!err) {
//             res.status(200).json({ message: "All Good!", foundUser })
//         } else {
//             res.status(400).json({ message: 'Bad req' })
//         }
//     })
// })

module.exports = router;
