const UserForm = require('../models/userFormModel');

// Admin Routes

// create and assign form
module.exports.createAndAssignForm = async (req, res) => {
    try {
        const { userId, formName, formSchema, createdBy } = req.body;

        const userForm = new UserForm({ userId, formName, formSchema, createdBy });
        await userForm.save();

        res.status(201).json({ message: 'Form created and assigned successfully', userForm });
    } catch (error) {
        res.status(500).json({ message: 'Error creating and assigning form', error });
    }
};

// get forms by admin
module.exports.getFormsByAdmin = async (req, res) => {
    try {
        const { adminId } = req.params;

        const forms = await UserForm.find({ createdBy: adminId });
        res.status(200).json({ forms });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching forms', error });
    }
};






// User Routes

// Get Forms Assigned to a User
module.exports.getUserForms = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log('userId', userId);
        const forms = await UserForm.find({ userId });
        console.log('forms', forms);
        res.status(200).json({ forms });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user forms', error });
    }
};

// submit form data
module.exports.submitFormData = async (req, res) => {
    try {
        const { formId } = req.params;
        const { formData } = req.body;

        const form = await UserForm.findByIdAndUpdate(
            formId,
            { formData },
            { new: true }
        );

        if (!form) {
            return res.status(404).json({ message: 'Form not found' });
        }

        res.status(200).json({ message: 'Form data submitted successfully', form });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting form data', error });
    }
};