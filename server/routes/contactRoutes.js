const express = require("express");
const router = express.Router();
const { submitContactForm, getAllContacts } = require("../controllers/contactController");

// Route to submit a contact form
router.post("/submitForm", submitContactForm);

// Route to get all contact messages (Admin)
router.get("/getAllContacts", getAllContacts);

module.exports = router;