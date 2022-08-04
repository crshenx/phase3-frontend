import React from "react";
import DressCard from "./DressCard";
import { Grid } from "@mui/material";
import SearchBar from "./SearchBar";
import { Container } from "@mui/material";

function Catalog({ render, handleCartRender }) {
  return (
    <div>
      <SearchBar render={render} />
    <Container>
    <Grid
    container
    spacing={4}
    direction="row"
    justifyContent="center"
    alignItems="center"
    rowSpacing={2}
    columnSpacing={{ xs: 1, sm: 10, md: 3 }}
    >
        {render.map((dress) => {
          return (
            <Grid item>
            <DressCard
              dress={dress}
              key={dress.id}
              handleCartRender={handleCartRender}
            />
            </Grid>
          );
        })}
      </Grid>
    </Container>
    </div>
  );
}
export default Catalog;
