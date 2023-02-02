import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import { useFormik } from "formik";
import * as Yup from "yup";

export const SearchForm = ({ setSearchTerm }) => {
  const initialValues = {
    searchTerm: "",
  };

  const validationSchema = Yup.object({
    searchTerm: Yup.string().required("Please enter a valid search term."),
  });

  const onSubmit = (formData) => {
    setSearchTerm(formData.searchTerm);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box sx={{ m: 1 }} component="form" onSubmit={formik.handleSubmit}>
      <FormControl sx={{ m: 1 }} fullWidth variant="standard">
        <InputLabel htmlFor="searchTerm">Search term</InputLabel>
        <Input
          id="searchTerm"
          name="searchTerm"
          type="text"
          value={formik.values.searchTerm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};
