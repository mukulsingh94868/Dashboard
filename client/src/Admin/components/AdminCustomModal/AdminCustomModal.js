import React from "react";
import PropTypes from "prop-types";
import { Modal, Box, TextField, Button } from "@mui/material";

const AdminCustomModal = ({ open, onClose, onSubmit, fields, title }) => {
  const [formData, setFormData] = React.useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? Array.from(files) : value,
    }));
  };

  // Submit form data
  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({}); // Reset form data
    onClose(); // Close modal
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: 600, // Increased modal width
          borderRadius: 2,
        }}
      >
        <h2 id="modal-title">{title}</h2>
        {fields.map((field) =>
          field.type === "textarea" ? (
            <TextField
              key={field.name}
              name={field.name}
              label={field.label}
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={4} // Define the number of rows for the textarea
              onChange={handleChange}
            />
          ) : (
            <TextField
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={handleChange}
              InputProps={{
                inputProps:
                  field.type === "file" ? { multiple: field.multiple } : {},
              }}
            />
          )
        )}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button onClick={onClose} variant="outlined" sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

AdminCustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      multiple: PropTypes.bool,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default AdminCustomModal;
