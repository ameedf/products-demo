const express = require('express');
const app = express();
const productRouter = require('./productRouter');

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/products', productRouter);

app.listen(8080, () => console.log("Server is up"));
