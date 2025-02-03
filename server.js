const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { or } = require('sequelize');
require('dotenv').config();

const app = express();
let corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.json({message: "ouais pas mal!"})
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});