import React from "react";
import DressCard from "./DressCard";
import { Grid } from "@mui/material";
// import SearchBar from "./SearchBar";
import { Container } from "@mui/material";

function Catalog({ render, handleCartRender }) {
  return (
    <div>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {render.map((dress) => {
            return (
              <Grid item m={4}>
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
