const nodemailer = require('nodemailer');

module.exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure:false,
    auth: {
        user: 'mukulsingh94868@gmail.com',
        pass: 'uvygcdgksphmkqlm',
    },
});