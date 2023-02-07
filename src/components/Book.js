import { useAppContext } from "./context/AppContext";
import Card from "@mui/material/Card";

export const Book = ({ book }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <Card sx={{ maxWidth: 600 }} variant="outlined">
      <div key={book.id} className="book">
        <div>
          <h2>{book.volumeInfo.title}</h2>
        </div>
        <div>
          <a href={book.volumeInfo.previewLink}>
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="#" />
          </a>
        </div>
        <div>
          <h4>{book.volumeInfo.authors}</h4>
        </div>
        <div>
          <h4>{book.volumeInfo.publishedDate}</h4>
        </div>

        <div>
          {favoritesChecker(book.id) ? (
            <button
              className="btn"
              onClick={() => removeFromFavorites(book.id)}
            >
              Remove from Favorites
            </button>
          ) : (
            <button className="btn" onClick={() => addToFavorites(book)}>
              Add to Favorites
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};
