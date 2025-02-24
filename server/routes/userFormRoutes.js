const express = require('express');
const { createAndAssignForm, getFormsByAdmin, getUserForms, submitFormData } = require('../controllers/userFormController');
const router = express.Router();


// Admin Form Routes
// Create and Assign a Form
router.post('/forms', createAndAssignForm);

// Get Forms Created by Admin
router.get('/forms/:adminId', getFormsByAdmin);



// User Form Routes

router.get('/user/forms/:userId', getUserForms);

// Submit Form Data
router.post('/user/forms/:formId/submit', submitFormData);

module.exports = router;