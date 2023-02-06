import { createContext, useContext } from "react";
import { useState } from "react";
import { getDataFromLocalStorage } from "../../utils/getDataFromLocalStorage";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Appcontext must be within appContexProvider!");
  }
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    getDataFromLocalStorage("books", [])
  );

  const addToFavorites = (book) => {
    const booksFromLS = getDataFromLocalStorage("books", []);

    booksFromLS.push(book);

    localStorage.setItem("books", JSON.stringify(booksFromLS));

    setFavorites(booksFromLS);
  };

  const removeFromFavorites = (id) => {
    const booksFromLS = getDataFromLocalStorage("books", []);

    const newBooks = booksFromLS.filter((book) => book.id !== id);

    localStorage.setItem("books", JSON.stringify(newBooks));

    setFavorites(newBooks);
  };

  return (
    <AppContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};
