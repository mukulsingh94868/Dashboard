import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './addProduct.css';
import toast from 'react-hot-toast';

const ProductForm = () => {
    const initialValues = {
        name: '',
        salePrice: '',
        regularPrice: '',
        vendor: '',
        type: '',
        color: '',
        inches: '',
        storageRAM: '',
        quantity: 1,
        varients: [
            "small",
            "medium",
            "large"
        ],
        price: '',
        imageUrl: '',
        description: '',
        prices: [
            {
                small: 200,
                medium: 350,
                large: 400
            }
        ]
    };

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await fetch('http://localhost:5000/api/product/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            const result = await response.json();
            if (response.ok) {
                toast.success(result?.message, {
                    duration: 3000,
                    position: 'top-right'
                });
                resetForm();
            } else {
                toast.error(result?.message, {
                    duration: 3000,
                    position: 'top-right'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Network Error', {
                duration: 3000,
                position: 'top-right'
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="form-container">
            <h1>Product Form</h1>
            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form className="form-grid">
                        <div className="form-row">
                            <div className="form-field">
                                <label>Name</label>
                                <Field type="text" name="name" />
                                <ErrorMessage name="name" component="div" className="error-message" />
                            </div>
                            <div className="form-field">
                                <label>Sale Price</label>
                                <Field type="text" name="salePrice" />
                                <ErrorMessage name="salePrice" component="div" className="error-message" />
                            </div>
                            <div className="form-field">
                                <label>Regular Price</label>
                                <Field type="text" name="regularPrice" />
                                <ErrorMessage name="regularPrice" component="div" className="error-message" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-field">
                                <label>Vendor</label>
                                <Field type="text" name="vendor" />
                                <ErrorMessage name="vendor" component="div" className="error-message" />
                            </div>
                            <div className="form-field">
                                <label>Type</label>
                                <Field type="text" name="type" />
                                <ErrorMessage name="type" component="div" className="error-message" />
                            </div>
                            <div className="form-field">
                                <label>Color</label>
                                <Field type="text" name="color" />
                                <ErrorMessage name="color" component="div" className="error-message" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-field">
                                <label>Inches</label>
                                <Field type="text" name="inches" />
                                <ErrorMessage name="inches" component="div" className="error-message" />
                            </div>
                            <div className="form-field">
                                <label>Storage RAM</label>
                                <Field type="text" name="storageRAM" />
                                <ErrorMessage name="storageRAM" component="div" className="error-message" />
                            </div>
                            <div className="form-field">
                                <label>Quantity</label>
                                <Field type="text" name="quantity" />
                                <ErrorMessage name="quantity" component="div" className="error-message" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-field">
                                <label>Varients</label>
                                {/* <Field as="select" name="varients" onChange={e => {
                                    const value = e.target.value;
                                    setFieldValue('varients', value);
                                    // Set the price based on the selected variant
                                    const priceMapping = values.prices[0];
                                    setFieldValue('price', priceMapping[value]);
                                }}>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </Field>
                                <ErrorMessage name="varients" component="div" className="error-message" /> */}
                                <Field type="text" name="varients" />
                                <ErrorMessage name="varients" component="div" className="error-message" />
                            </div>
                            <div className="form-field">
                                <label>Price</label>
                                <Field type="text" name="price" disabled value={values.price} />
                                <ErrorMessage name="price" component="div" className="error-message" />
                            </div>
                            <div className="form-field">
                                <label>Image URL</label>
                                <Field type="text" name="imageUrl" />
                                <ErrorMessage name="imageUrl" component="div" className="error-message" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-field">
                                <label>Description</label>
                                <Field type="text" name="description" />
                                <ErrorMessage name="description" component="div" className="error-message" />
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ProductForm;
