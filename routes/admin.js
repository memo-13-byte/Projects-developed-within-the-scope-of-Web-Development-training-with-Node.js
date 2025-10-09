const express = require('express');
const router = express.Router();

const path = require('path');

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    // database' e kayıt ve benzeri gibi işlemler burda yapılabilir.
    console.log(req.body);

    res.redirect('/');
});

module.exports = router;