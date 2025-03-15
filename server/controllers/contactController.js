const ContactModel = require("../models/contactModel");

exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newContact = new ContactModel({ name, email, subject, message });

        const savedContact = await newContact.save();
        res.status(201).json({ success: true, statusCode: 201, message: "Message sent successfully!", savedContact });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactModel.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};
