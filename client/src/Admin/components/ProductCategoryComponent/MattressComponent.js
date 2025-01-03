import React, { useState } from "react";
import AdminTable from "../AdminTable/AdminTable";
import { Button } from "@mui/material";
import "./productCategory.css";
import AdminCustomModal from "../AdminCustomModal/AdminCustomModal";

const MattressComponent = ({ data, fn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (formData) => {
    try {
      // Create a FormData object to handle file uploads
      const payload = new FormData();

      // Append form fields to the payload
      Object.keys(formData).forEach((key) => {
        if (Array.isArray(formData[key])) {
          // If the field is an array (e.g., multiple images), append each file
          formData[key].forEach((file) => payload.append(key, file));
        } else {
          payload.append(key, formData[key]);
        }
      });

      // Make the POST request to the API
      const response = await fetch(
        "http://localhost:5000/api/categoryProduct/mattress",
        {
          method: "POST",
          body: payload,
        }
      );

      // Handle the API response
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();

      // Optional: Update UI or state based on successful submission
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="mainContainer">
      <div className="mainMattress">
        <Button variant="contained" onClick={handleOpenModal}>
          Add Mattress
        </Button>
      </div>
      <AdminTable data={data} />

      <AdminCustomModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        title="Add New Mattress"
        fields={[
          { name: "title", label: "Title", type: "text" },
          { name: "description", label: "Description", type: "text" },
          {
            name: "fullDescription",
            label: "Full Description",
            type: "textarea",
          },
          { name: "images", label: "Images", type: "file", multiple: true },
        ]}
      />
    </div>
  );
};

export default MattressComponent;
