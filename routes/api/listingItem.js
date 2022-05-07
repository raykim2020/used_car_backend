////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Listing = require("../../models/listingItem");
const listingCtrl = require('../../controllers/api/listingItem')

const router = express.Router();
//Index
router.get("/", listingCtrl.index);
//Show
router.get("/:id", listingCtrl.show);
//Delete
router.delete('/:id', listingCtrl.deleteListing)
//Update
router.put('/:id', listingCtrl.update)
//create
router.post('/', listingCtrl.create)


module.exports = router;