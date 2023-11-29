const AuthModel = require('../models/authModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { transporter } = require('../nodeMailer');

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


module.exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await AuthModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const resetToken = await bcrypt.hash(email + new Date().toISOString(), 10);
        const resetTokenExpiration = new Date(Date.now() + 3600000);

        user.resetToken = resetToken;
        user.resetTokenExpiration = resetTokenExpiration;
        await user.save();

        const resetLink = `?token=${resetToken}`;
        const mailOptions = {
            from: 'mukulsingh94868@gmail.com',
            to: email,
            subject: 'Password Reset',
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3498db;">Password Reset</h2>
            <p>Hello,</p>
            <p>We received a request to reset your password. Click the link below to reset it:</p>
            <a href="http://localhost:3000/reset-password/${resetToken}" style="display: inline-block; padding: 10px 20px; background-color: #3498db; color: #ffffff; text-decoration: none; border-radius: 5px;">Reset Password</a>
            <p>If you did not request a password reset, please ignore this email.</p>
            <p>Thanks,<br>Your Company Name</p>
          </div>
            `
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Failed to send reset email' });
            }
            res.json({ message: 'Password reset email sent successfully' });
        });
    } catch (error) {
        console.log('error sending email:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}