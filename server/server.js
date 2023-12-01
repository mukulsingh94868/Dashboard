const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const cookieParser = require('cookie-parser');


const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use(cors('*'));
app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/blog', blogRoutes);

const PORT = 5000;
const MONGO_URL = 'mongodb+srv://admin_dashboard:admin_dashboard_123@cluster0.t5q7pda.mongodb.net/admin_dashboard';

mongoose.connect(MONGO_URL).then(() => {
    console.log('DB connection established');
    app.listen(PORT, () => {
        console.log('listening on port 5000');
    })
})