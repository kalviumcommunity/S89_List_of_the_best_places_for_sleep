const express = require('express');
const Place = require('./schema');

const router = express.Router();

// Middleware for user validation
const validateUser = (req, res, next) => {
    const userToken = req.headers['authorization'];
    if (!userToken || userToken !== 'valid-token') {
        return res.status(403).json({ error: 'Unauthorized access' });
    }
    next();
};

// Get all places with filtering, sorting, and pagination
router.get('/places', async (req, res) => {
    try {
        const { page = 1, limit = 10, sortBy = 'createdAt', order = 'desc', ...filters } = req.query;
        const places = await Place.find(filters)
            .sort({ [sortBy]: order === 'desc' ? -1 : 1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));
        res.status(200).json(places);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch places' });
    }
});

// Get a specific place by ID
router.get('/places/:id', async (req, res) => {
    try {
        const place = await Place.findById(req.params.id);
        if (!place) return res.status(404).json({ error: 'Place not found' });
        res.status(200).json(place);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch place' });
    }
});

// Add a new place
router.post('/places', validateUser, async (req, res) => {
    try {
        const newPlace = new Place(req.body);
        await newPlace.save();
        res.status(201).json(newPlace);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add place' });
    }
});

// Update a place by ID
router.put('/places/:id', validateUser, async (req, res) => {
    try {
        const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPlace) return res.status(404).json({ error: 'Place not found' });
        res.status(200).json(updatedPlace);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update place' });
    }
});

// Delete a place by ID
router.delete('/places/:id', validateUser, async (req, res) => {
    try {
        const deletedPlace = await Place.findByIdAndDelete(req.params.id);
        if (!deletedPlace) return res.status(404).json({ error: 'Place not found' });
        res.status(200).json({ message: 'Place deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete place' });
    }
});

module.exports = router;