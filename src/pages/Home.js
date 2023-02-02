import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import { SearchForm } from "../components/SearchForm";
import { Counteries } from "../components/Counteries";
import { useEffect, useState } from "react";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    if (searchTerm) {
      console.log("API CALL");
    }
  }, [searchTerm]);

  return (
    <Container maxWidth="xl">
      <Stack gap={3}>
        <SearchForm setSearchTerm={setSearchTerm} />

        <Counteries />
      </Stack>
    </Container>
  );
};
