const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const authRoutes = require('./routes/authRoutes');
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = 5000;
const MONGO_URL = 'mongodb+srv://admin_dashboard:admin_dashboard_123@cluster0.t5q7pda.mongodb.net/admin_dashboard';

mongoose.connect(MONGO_URL).then(() => {
    console.log('DB connection established');
    app.listen(PORT, () => {
        console.log('listening on port 5000');
    })
})