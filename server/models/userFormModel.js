const mongoose = require('mongoose');

const userFormSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // User to whom the form is assigned
    formName: { type: String, required: true }, // Name of the form
    formSchema: { type: Object, required: true }, // JSON schema of the form
    createdBy: { type: String, required: true }, // Admin ID who created the form
    formData: { type: Object, default: null }, // Data submitted by the user (null if not submitted yet)
}, { timestamps: true });

module.exports = mongoose.model('UserForm', userFormSchema);