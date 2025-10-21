const express = require('express');
const app = express();

// Service the static files
app.use(express.static('public'));
app.use('/fontawesome', express.static('fontawesome-free-7.1.0-web'));



const path = require('path');

const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const errorController = require('./controllers/errors');

// app.use((req, res, next) => {
//     console.log('Middleware 1 is worked');
//     next();
// });

app.use(bodyParser.urlencoded({extended: false}));
// Routes
app.use('/admin', adminRoutes);
app.use(userRoutes);


app.use(errorController.get404Page);

// app.get('/', (req, res) => {
//     res.send('Hello Mark Hoffman');
// });

// app.get('/api/products', (req, res) => {
//     res.send('Products are listed.');
// });

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

