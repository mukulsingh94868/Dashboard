import React from "react";
import AdminTable from "../AdminTable/AdminTable";
import { Button } from "@mui/material";

const SofaCumBed = ({ data }) => {
  return (
    <div className="mainContainer">
      <div className="mainMattress">
        <Button variant="contained">Add Sofa Cum Bed</Button>
      </div>
      <AdminTable data={data} />
    </div>
  );
};

export default SofaCumBed;
