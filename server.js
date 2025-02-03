const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

console.log('DB_HOST:', process.env.HOSTNAME,
            '\nDB_USER:', process.env.DB_USER,
            '\nDB_PASSWORD:', process.env.PASSWORD,
            '\nDB_NAME:', process.env.DATABASE,
            '\nPORT:', process.env.PORT);

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

//models
const models = require('./models');
models.sequelize.sync().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log('Error connecting to database', err);
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});