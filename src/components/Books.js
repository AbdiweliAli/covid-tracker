import Box from "@mui/material/Box";
import { Book } from "./Book";

export const Books = ({ books }) => {
  return (
    <>
      <h1>Books</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {books.map((book) => (
          <Book book={book} />
        ))}
      </Box>
    </>
  );
};

export default Books;
