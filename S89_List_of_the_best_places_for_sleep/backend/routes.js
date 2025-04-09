const express = require('express');

const router = express.Router();

// Example route: Get all places
router.get('/places', (req, res) => {
    res.send('List of the best places for sleep');
});

// Example route: Get a specific place by ID
router.get('/places/:id', (req, res) => {
    const placeId = req.params.id;
    res.send(`Details of place with ID: ${placeId}`);
});

// Example route: Add a new place
router.post('/places', (req, res) => {
    const newPlace = req.body;
    res.send(`New place added: ${JSON.stringify(newPlace)}`);
});

// Example route: Update a place by ID
router.put('/places/:id', (req, res) => {
    const placeId = req.params.id;
    const updatedPlace = req.body;
    res.send(`Place with ID: ${placeId} updated to: ${JSON.stringify(updatedPlace)}`);
});

// Example route: Delete a place by ID
router.delete('/places/:id', (req, res) => {
    const placeId = req.params.id;
    res.send(`Place with ID: ${placeId} deleted`);
});

module.exports = router;