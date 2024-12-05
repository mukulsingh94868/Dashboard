import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import "../MapComponent/mapComponent.css";

const AdminStackedAreaChart = ({ data }) => {
    const data1 = [
        { month: "Jan", ProductA: 400, ProductB: 240, ProductC: 200 },
        { month: "Feb", ProductA: 300, ProductB: 139, ProductC: 221 },
        { month: "Mar", ProductA: 200, ProductB: 980, ProductC: 229 },
        { month: "Apr", ProductA: 278, ProductB: 390, ProductC: 200 },
    ];

    const mergedData = data1.map((item, index) => ({
        ...item,
        ...data[index],
    }));

    const sortData = [
        { id: 1, name: "Today" },
        { id: 2, name: "Last Weekly" },
        { id: 3, name: "Last Month" },
        { id: 4, name: "Current Year" },
    ];

    return (
        <div className="map-container">
            <div className="cardHeader">
                <p>Total Company Valuation</p>
                <div className="salesSelect">
                    <p>Sort By:</p>
                    <select name="cars" id="cars" className="select">
                        {sortData.map((item) => (
                            <option key={item.id} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <ResponsiveContainer>
                <AreaChart
                    data={mergedData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="ProductA"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                    <Area
                        type="monotone"
                        dataKey="ProductB"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                    <Area
                        type="monotone"
                        dataKey="ProductC"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AdminStackedAreaChart;
