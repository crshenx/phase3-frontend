import React from "react";
import CartCard from "./CartCard";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

function Cart({ renderCart, handleCartRender }) {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {renderCart.map((dress) => {
          return (
            <CartCard
              dress={dress}
              key={dress.id}
              handleCartRender={handleCartRender}
            />
          );
        })}
      </Grid>
    </Container>
  );
}

export default Cart;
