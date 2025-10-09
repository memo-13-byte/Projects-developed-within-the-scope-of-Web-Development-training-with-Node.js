const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
    console.log('Logging is maded...');
    // next();
});

module.exports = router;