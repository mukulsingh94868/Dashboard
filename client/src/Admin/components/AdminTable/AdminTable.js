import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem } from "@mui/material";
import { deleteBlogsByCategory } from "../../../Network/Api";
import toast from "react-hot-toast";

const AdminTable = ({ data, handleOpenModal }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (id) => {
    console.log('id', id);
    handleOpenModal();
    // handleClose();
  };

  const handleDelete = async (id) => {
    const res = await deleteBlogsByCategory(id);
    if (res?.statusCode === 200) {  
      toast.success(res?.message, { duration: 2000, position: 'top-right' });
      handleClose();
    }
  }

  if (!Array.isArray(data)) {
    console.error("Expected 'data' to be an array, but received:", data);
    return <p>No data available to display</p>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Full Description</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row._id || row.title}
            >
              <TableCell align="left">{row._id}</TableCell>
              <TableCell align="left" component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.fullDescription}</TableCell>
              <TableCell align="left">
                <MoreVertIcon onClick={handleClick} />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={() => handleEdit(row._id)}>Edit</MenuItem>
                  <MenuItem onClick={() => handleDelete(row._id)}>Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
