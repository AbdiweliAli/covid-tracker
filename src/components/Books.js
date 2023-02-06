import { Book } from "./Book";

export const Books = ({ books }) => {
  return (
    <>
      <h1>Books</h1>
      <div className="books">
        {books.map((book) => (
          <Book book={book} />
        ))}
      </div>
    </>
  );
};

export default Books;
