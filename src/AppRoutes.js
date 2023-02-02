import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { MyLibrary } from "./pages/MyLibrary";
import { Error } from "./pages/Error";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/my-library" element={<MyLibrary />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};
