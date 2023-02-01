import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
// import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

export const SearchForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };
  return (
    <Box sx={{ m: 1 }} component="form" onSubmit={handleSubmit}>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="searchTerm">search Term</InputLabel>
        <Input
          id="searchTerm"
          type="text"
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit">
                <TravelExploreIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};
