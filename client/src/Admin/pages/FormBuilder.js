import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import axios from 'axios';

const FormBuilder = () => {
    const [forms, setForms] = useState([]);
    const [userList, setUserList] = useState([]);
    const [formCreationSuccess, setFormCreationSuccess] = useState(false);


    useEffect(() => {
        const fetchFormsAndUsers = async () => {
          try {
            // Fetch forms created by the admin
            const formResponse = await axios.get(`/api/admin/forms/:adminId`);
            setForms(formResponse.data.forms);
    
            // Fetch all users (this can be an API to get users from your system)
            const userResponse = await axios.get('/api/admin/users');
            setUserList(userResponse.data.users);
          } catch (error) {
            console.error('Error fetching forms or users', error);
          }
        };
    
        fetchFormsAndUsers();
      }, [formCreationSuccess]);

    return (
        <>
        FormBuilder
        </>
    )
};

export default FormBuilder;