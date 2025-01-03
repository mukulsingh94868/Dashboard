import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MattressComponent from "../components/ProductCategoryComponent/MattressComponent";
import PillowComponent from "../components/ProductCategoryComponent/PillowComponent";
import SofaCumBed from "../components/ProductCategoryComponent/SofaCumBed";
import axios from "axios";
import { getProductCategory } from "../../Network/Api";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductCategories = () => {
  const [value, setValue] = React.useState(0);
  const [valueSet, setValueSet] = React.useState(1);

  const arr = ["mattress", "pillow", "sofaCumBed"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const selectedCategory = arr[value];

    const getSelectedCategory = async () => {
      const result = await getProductCategory(selectedCategory);
      setValueSet(result);
    };

    getSelectedCategory();
  }, [value]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Mattress" {...a11yProps(0)} />
          <Tab label="Pillow" {...a11yProps(1)} />
          <Tab label="Sofa Cum Bed" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MattressComponent data={valueSet} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PillowComponent data={valueSet} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SofaCumBed data={valueSet} />
      </CustomTabPanel>
    </Box>
  );
};

export default ProductCategories;
