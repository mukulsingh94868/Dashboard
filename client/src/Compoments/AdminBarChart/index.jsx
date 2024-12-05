import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import '../MapComponent/mapComponent.css';


const AdminBarChart = ({ data }) => {
    const data1 = [
        { name: "Jan", Sales: 4000, Expenses: 2400 },
        { name: "Feb", Sales: 3000, Expenses: 1398 },
        { name: "Mar", Sales: 2000, Expenses: 9800 },
        { name: "Apr", Sales: 2780, Expenses: 3908 },
        { name: "May", Sales: 1890, Expenses: 4800 },
        { name: "Jun", Sales: 2390, Expenses: 3800 },
        { name: "Jul", Sales: 3490, Expenses: 4300 },
    ];

    
    const mergedData = data1.map((item, index) => ({
        ...item,
        ...data[index]
    }));
    return (
        <div className="map-container">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mergedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                    <Bar dataKey="progressValue" fill="#82ca9d" />
                    <Bar dataKey="Expenses" fill="#82ca9d" />
                    <Bar dataKey="Sales" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
};

export default AdminBarChart;