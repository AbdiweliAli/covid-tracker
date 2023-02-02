import { Book } from "./Book";

export const Books = ({ books }) => {
  return (
    <>
      <h1>Books</h1>
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </>
  );
};
