import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { Card1, Card2, Card3, Card4 } from '../Compoments/Cards/Cards';
import BiaxialBarChart, { BarChartGraph } from '../Compoments/Charts/BarChartGraph';
import SimpleLineChart, { LineChartGraph } from '../Compoments/Charts/LineChartGraph';
import { MultipleYAxesScatterChart, ScaleExample } from '../Compoments/Charts/PieChartGraph';
import DashTableOne from '../Compoments/table/DashTableOne';
import DashTableTwo from '../Compoments/table/DashTableTwo';

const Dashboard = () => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Card1 />
          </Grid>
          <Grid item xs={3}>
            <Card2 />
          </Grid>
          <Grid item xs={3}>
            <Card3 />
          </Grid>
          <Grid item xs={3}>
            <Card4 />
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={5}>
          <Grid item xs={4}>
            <BarChartGraph />
          </Grid>
          <Grid item xs={4}>
            <SimpleLineChart />
          </Grid>
          <Grid item xs={4}>
            <LineChartGraph />
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={5}>
          <Grid item xs={4}>
            <MultipleYAxesScatterChart />
          </Grid>
          <Grid item xs={4}>
            <ScaleExample />
          </Grid>
          <Grid item xs={4}>
            <BiaxialBarChart />
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={5}>
          <Grid item xs={6}>
            <DashTableOne />
          </Grid>

          <Grid item xs={6}>
            <DashTableTwo />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Dashboard