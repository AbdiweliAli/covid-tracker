import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const [showNavMenu, setshowNavMenu] = useState(false);

  const handleOpenNavMenu = (event) => {
    setshowNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setshowNavMenu(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={showNavMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(showNavMenu)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/");
                }}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/about-me");
                }}
              >
                <Typography textAlign="center">About Me</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/my-library");
                }}
              >
                <Typography textAlign="center">My Library</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* navbar for desktop viewport */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/about-me");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About Me
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/my-library");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              My Library
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
