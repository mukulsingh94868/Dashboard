import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const uData1 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData1 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels1 = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export const LineChartGraph = () => {
    return (
        <LineChart
            width={500}
            height={300}
            series={[
                { data: uData, label: 'uv', area: true, stack: 'total', showMark: false },
                { data: pData, label: 'pv', area: true, stack: 'total', showMark: false },
                {
                    data: amtData,
                    label: 'amt',
                    area: true,
                    stack: 'total',
                    showMark: false,
                },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
                '.MuiLineElement-root': {
                    display: 'none',
                },
            }}
        />
    )
};

export default function SimpleLineChart() {
    return (
        <LineChart
            width={500}
            height={300}
            series={[
                { data: pData1, label: 'pv' },
                { data: uData1, label: 'uv' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels1 }]}
        />
    );
}