const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

require("dotenv/config");

// Import Routes
const postsRoutes = require('./routes/posts')

// Middlewares
app.use(cors())
app.use(bodyParser.json());

app.use('/posts', postsRoutes);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    },
    () => {
        console.log("connected to db");
    }
);

app.listen(3000);