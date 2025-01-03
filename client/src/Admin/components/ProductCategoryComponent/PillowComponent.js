import React from "react";
import AdminTable from "../AdminTable/AdminTable";
import { Button } from "@mui/material";

const PillowComponent = ({ data }) => {
  return (
    <div className="mainContainer">
      <div className="mainMattress">
        <Button variant="contained">Add Pillow</Button>
      </div>
      <AdminTable data={data} />
    </div>
  );
};

export default PillowComponent;
