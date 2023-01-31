import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { LStorage } from "./pages/LStorage";
import { Error } from "./pages/Error";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/LStorage" element={<LStorage />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};
