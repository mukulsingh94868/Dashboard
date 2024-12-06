import React from "react";
import { Button } from "@mui/material";
import "./adminProductListTable.css";

const AdminProductListTable = ({ prodData }) => {
    const dummyData = [
        { id: 1, productName: "Product A", category: "Electronics", price: "$200", status: "Available" },
        { id: 2, productName: "Product B", category: "Home", price: "$150", status: "Out of Stock" },
        { id: 3, productName: "Product C", category: "Fashion", price: "$80", status: "Limited" },
        { id: 4, productName: "Product D", category: "Beauty", price: "$50", status: "Available" },
        { id: 5, productName: "Product E", category: "Sports", price: "$120", status: "Discontinued" },
    ];

    const filterData = prodData?.map((prod, index) => ({
        color: prod.color,
        inches: prod.inches,
        name: prod.name,
        salePrice: prod.salePrice,
        type: prod.type,
        status: dummyData[index]?.status,
    })).slice(0, 5);

    const getStatusClass = (status) => {
        switch (status) {
            case "Available":
                return "status-available";
            case "Out of Stock":
                return "status-out";
            case "Limited":
                return "status-limited";
            case "Discontinued":
                return "status-discontinued";
            default:
                return "";
        }
    };

    const handleExport = () => {
        // Prepare CSV content
        const headers = ["Name", "Color", "Inches", "Sale Price", "Type"];
        const csvRows = prodData.map((prod) => [
            prod.name,
            prod.color,
            prod.inches,
            prod.salePrice,
            prod.type,
        ]);

        // Add headers to the CSV content
        const csvContent = [headers, ...csvRows]
            .map((row) => row.map((item) => `"${item}"`).join(","))
            .join("\n");

        // Create a Blob for the CSV
        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        // Create a temporary link element to download the file
        const a = document.createElement("a");
        a.href = url;
        a.download = "ProductList.csv";
        document.body.appendChild(a);
        a.click();

        // Clean up the URL and remove the temporary link
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };


    return (
        <div className="map-container">
            <div className="cardHeader">
                <p>Total Company Valuation</p>
                <div className="salesSelect">
                    <Button variant="outlined" onClick={handleExport}>Export</Button>
                </div>
            </div>

            <table className="productTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Inches</th>
                        <th>Type</th>
                        <th>Sale Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData?.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.color}</td>
                            <td>{item.inches}</td>
                            <td>{item.type}</td>
                            <td>{item.salePrice}</td>
                            <td className={getStatusClass(item.status)}>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminProductListTable;
