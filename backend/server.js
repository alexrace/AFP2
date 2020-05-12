const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const partRouter = require('./routes/partRouter');
const inventoryRouter = require('./routes/inventoryRouter');

const app = express();
const port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/parts', partRouter);
app.use('/inventory', inventoryRouter);

app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));                               
});

app.listen(port, () => {
    console.log(`A szerver elindult a http://localhost:${port}/ címen!`);
});