import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import { SearchForm } from "../components/SearchForm";
import { Books } from "../components/Books";
import { useEffect, useState } from "react";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [books, setBooks] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      const fetchData = async () => {
        try {
          setLoading(true);

          const { data } = await axios.get(
            `https://www.googleapis.com/books/v1/volumes`,
            {
              params: {
                q: searchTerm,
              },
            }
          );

          setLoading(false);
          setError(false);
          setBooks(data?.items || []);
        } catch (error) {
          console.log(error.message);

          setLoading(false);
          setBooks();
          setError(true);
        }
      };

      fetchData();
    }
  }, [searchTerm]);

  console.log(books);

  return (
    <Container maxWidth="xl">
      <Stack gap={3}>
        <SearchForm setSearchTerm={setSearchTerm} />
        {loading && (
          <Backdrop sx={{ color: "#fff", zIndex: 4 }} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        {error && <div>ERROR</div>}
        {books && <Books books={books} />}
      </Stack>
    </Container>
  );
};
