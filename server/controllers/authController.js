const AuthModel = require('../models/authModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    try {
        const { fullname, username, password, email, phone, gender, location } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new AuthModel({
            fullname,
            username,
            email,
            phone,
            gender,
            location,
            password: hashedPassword,
            role: 'user'
        });
        const saveUser = await newUser.save();
        res.status(201).json({
            saveUser,
            message: 'User Registered'
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const usernameCheck = await AuthModel.findOne({ username });

        if (!usernameCheck) {
            return res.status(401).json({ message: 'Username not found' });
        }

        const passwordCheck = await bcrypt.compare(password, usernameCheck.password);
        if (!passwordCheck) {
            return res.status(401).json({ message: 'Password incorrect' });
        }
        const token = jwt.sign({ username: usernameCheck.username }, 'tdyhdrtgfd', {
            expiresIn: '1hr'
        });
        res.status(200).json({
            data: usernameCheck,
            token: token,
            message: 'Token Registered'
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// get api
module.exports.getAllData = async (req, res) => {
    try {
        const userData = await AuthModel.find();

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get single user
module.exports.getSingleData = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await AuthModel.findById(id);

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update api
module.exports.updateData = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await AuthModel.findById(id);

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        const updateData = await AuthModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await AuthModel.findById(id);

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        await AuthModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}