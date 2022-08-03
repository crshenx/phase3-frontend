import React from "react";
import DressCard from "./DressCard";
import { Grid } from "@mui/material";
import SearchBar from "./SearchBar";
import { Container } from "@mui/material";

function Catalog({ render, handleCartRender }) {
  return (
    <Container>
      <SearchBar render={render} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {render.map((dress) => {
          return (
            <DressCard
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
export default Catalog;
