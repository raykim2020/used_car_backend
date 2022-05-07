const Listing = require('../../models/listingItem');

module.exports = {
    index,
    show,
    create,
    deleteListing,
    update
};

async function index(req, res) {
    try {
        const listing = await Listing.find({}).sort('name').populate('make').exec();
        // re-sort based upon the sortOrder of the categories
        listing.sort((a, b) => a.make.sortOrder - b.make.sortOrder);
        res.status(200).json(listing);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const listing = await Listing.findById(req.params.id);
        res.status(200).json(listing);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function create(req, res) {
    try {
        const listing = await Listing.create(req.body);
        res.status(200).json(listing)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

async function deleteListing(req, res) {
    try {
        const { id } = req.params;
        const listing = await Listing.findByIdAndDelete(id)
        res.status(200).json(listing)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

async function update(req, res) {
    try {
        const { id } = req.params
        const listing = await Listing.findByIdAndUpdate(id, req.body)
        res.status(200).json(listing)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}