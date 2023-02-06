import { useAppContext } from "../components/context/AppContext";

export const MyLibrary = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      {favorites.length !== 0 ? (
        favorites.map((book) => (
          <div key={book?.id} className="book">
            <div>
              <h2>{book?.volumeInfo?.title}</h2>
            </div>
            <div>
              <img src={book?.volumeInfo?.imageLinks?.smallThumbnail} alt="#" />
            </div>
            <div>
              <h4>{book?.volumeInfo?.authors}</h4>
            </div>
            <div>
              <h4>{book?.volumeInfo?.publishedDate}</h4>
            </div>

            <div>
              {favoritesChecker(book?.id) ? (
                <button onClick={() => removeFromFavorites(book?.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button className="btn" onClick={() => addToFavorites(book)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You haven't got any favorite books yet!</h1>
      )}
    </div>
  );
};
