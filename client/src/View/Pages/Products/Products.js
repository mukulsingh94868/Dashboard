import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import useStyles from './style';
import { useNavigate } from 'react-router-dom';


const Products = ({ prod }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [varient, setVarient] = useState('small');
  const [quantity, setQuantity] = useState(1);

  const cardClick = (id) => {
    navigate(`/dashboard/products/${id}`);
  };

  return (
    <Grid item xs={3}>
      <Card className={classes.cardPointer}>
        <CardOverflow onClick={() => cardClick(prod?._id)}>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img src={prod?.imageUrl} alt="" />
          </AspectRatio>
        </CardOverflow>

        <CardContent>
          <Typography level="body-xs">{prod?.name}</Typography>
          <Typography level="title-lg" sx={{ mt: 1, fontWeight: 'xl' }}
            endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success">
                {prod?.vendor}
              </Chip>
            }
          >
            {`$${prod?.salePrice}`}
          </Typography>
          <Typography level="body-sm">(Only <b>{prod?.quantity}</b> left in stock!)</Typography>
        </CardContent>

        <CardOverflow>
          <div className={classes.selectPart}>
            <div>
              <Typography className={classes.selectTypo}>Varients</Typography>
              <select className={classes.selectControl} value={varient} onChange={(e) => setVarient(e.target.value)}>
                {
                  prod?.varients?.map((varient, index) => {
                    return (
                      <option value={varient} key={index}>
                        {varient}
                      </option>
                    )
                  })
                }
              </select>
            </div>

            <div>
              <Typography className={classes.selectTypo}>Quantity</Typography>
              <select className={classes.selectControl} value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {[...Array(10)?.keys()]?.map((x, i) => {
                  return (
                    <option value={i + 1} key={i}>
                      {i + 1}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
        </CardOverflow>

        <CardOverflow>
          <div className={classes.selectPart}>
            <div>
              <Typography className={classes.priceTag}>Price: {prod.prices[0][varient] * quantity}Rs</Typography>
            </div>

            <div>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </CardOverflow>
      </Card>
    </Grid>
  )
}

export default Products;