import { BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import { AppContextProvider } from "./components/context/AppContext";

import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <NavigationBar />
        <AppRoutes />
        <Footer />
      </AppContextProvider>
    </BrowserRouter>
  );
};
