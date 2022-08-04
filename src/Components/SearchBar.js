import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchBar({ render, handleSearchChange }) {
  const dressesArray = render;
  const options = dressesArray.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      onChange={handleSearchChange}
      id="search"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="With categories" />
      )}
    />
  );
}
