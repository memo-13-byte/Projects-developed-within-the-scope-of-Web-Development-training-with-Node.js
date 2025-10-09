const express = require('express');
const app = express();

const path = require('path');

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

// app.use((req, res, next) => {
//     console.log('Middleware 1 is worked');
//     next();
// });

app.use(bodyParser.urlencoded({extended: false}));
// Routes
app.use('/admin', adminRoutes);
app.use(userRoutes);


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// app.get('/', (req, res) => {
//     res.send('Hello Mark Hoffman');
// });

// app.get('/api/products', (req, res) => {
//     res.send('Products are listed.');
// });

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

