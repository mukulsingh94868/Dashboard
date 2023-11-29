import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import React from 'react';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DashTableOne = () => {
    return (
        <Sheet style={{ border: '1px solid #8f848433' }}>
            <Table aria-label="striped table">
                <thead>
                    <tr>
                        <th style={{ width: '40%' }}>Dessert (100g serving)</th>
                        <th>Calories</th>
                        <th>Fat&nbsp;(g)</th>
                        <th>Carbs&nbsp;(g)</th>
                        <th>Protein&nbsp;(g)</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.name}>
                            <td>{row.name}</td>
                            <td>{row.calories}</td>
                            <td>{row.fat}</td>
                            <td>{row.carbs}</td>
                            <td>{row.protein}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Sheet>
    )
}

export default DashTableOne