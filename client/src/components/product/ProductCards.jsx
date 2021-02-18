import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@material-ui/core";

function ProductCards({products}) {

  return (
      <Grid item container>
      <Grid item xs={false} sm={1} />
      <Grid item xs={12} sm={10}>
        <Grid container spacing={3}>
          {products && products.map((product) =>{return (
            <Grid key={product.id} container item justify="center" xs={12} sm={6} md={4}> 
              <ProductCard key={product.id} product={product} />
            </Grid>)
          })}
          </Grid>
        </Grid>
      <Grid item xs={false} sm={1}/>
    </Grid>
  );
}

export default ProductCards;