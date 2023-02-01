import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import { SearchForm } from "../components/SearchForm";
import { Counteries } from "../components/Counteries";

export const Home = () => {
  return (
    <Container maxWidth="xl">
      <Stack gap={3}>
        <SearchForm />
        <Counteries />
      </Stack>
    </Container>
  );
};
