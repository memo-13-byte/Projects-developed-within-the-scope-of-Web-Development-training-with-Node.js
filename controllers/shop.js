const Product = require('../models/product');


exports.getIndex = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));

    const products = Product.getAll();
    res.render('shop/index', 
        { 
        title: 'Shopping App', 
        products: products, 
        path: '/'
    });
    console.log('Logging is maded...');
    // next();
}

exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));

    const products = Product.getAll();
    res.render('shop/products', 
        { 
        title: 'Products', 
        products: products, 
        path: '/products'
    });
    console.log('Logging is maded...');
    // next();
}

exports.getProductDetails = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));

    res.render('shop/details', 
        { 
        title: 'Details', 
        path: '/details'
    });
    console.log('Logging is maded...');
    // next();
}

exports.getCart = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));

    res.render('shop/cart', 
        { 
        title: 'Cart', 
        path: '/cart'
    });
    console.log('Logging is maded...');
    // next();
}

exports.getOrders = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));

    res.render('shop/orders', 
        { 
        title: 'Orders', 
        path: '/orders'
    });
    console.log('Logging is maded...');
    // next();
}