import Box from "@mui/material/Box";

import img from "../img/searchbooks.png";

export const Banner = () => {
  return (
    <Box>
      <div className="search">
        <h1>Google book search app</h1>
        <img src={img} alt="" />
      </div>
      <div>
        <hr className="underline" />
      </div>
    </Box>
  );
};
