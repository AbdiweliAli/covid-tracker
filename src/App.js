import { BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";

import { AppRoutes } from "./AppRoutes";
// import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRoutes />
    </BrowserRouter>
  );
};
