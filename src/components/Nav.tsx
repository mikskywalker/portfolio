import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useScrollTrigger,
  Grid,
} from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// Icons
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";

// example of custom
/**
   * const Buttons = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
 * 
 */

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /** for nav bar texts changing colors */
  const [navMagicTexts, setNavMagicTexts] = useState<"black" | "white">(
    "white"
  );
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleScroll = () => {
    if (window.scrollY >= 0) {
      setNavMagicTexts("white");
    }
    if (window.scrollY >= 100) {
      setNavMagicTexts("white");
    }
    if (window.scrollY >= 650) {
      setNavMagicTexts("white");
    }
    if (window.scrollY >= 1680) {
      setNavMagicTexts("white");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ color: navMagicTexts,
        backgroundColor:  'rgba(17, 16, 16, 0.7)', // Set the background color with transparency
        
        boxShadow: 'none', // Remove the default shadow
      }}
        elevation={trigger ? 0 : 0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 3,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: navMagicTexts,
              }}
            >
              miks
            </Typography>

            <Grid
              container
              justifyContent="end"
              spacing={3}
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <Grid item>
                <Link to="/">
                  <Button
                    sx={{ color: navMagicTexts }}
                    onClick={handleCloseNavMenu}
                    variant="btnLink"
                  >
                    Home
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/contact">
                  <Button
                    sx={{ color: navMagicTexts }}
                    onClick={handleCloseNavMenu}
                    variant="btnLink"
                  >
                    Contact
                  </Button>
                </Link>
              </Grid>
            </Grid>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
           
                <Link to="/" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography color="secondary" textAlign="center">
                      Home
                    </Typography>
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <Typography color="secondary" textAlign="center">
                      Contact
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            {/* 
            undecided if I want to use this instead, but for now ill just display my name
            <Icon sx={{ display: { xs: "flex", md: "none" } }} fontSize="large">
              <img src={DragonLogo} alt="Dragon Icon" />
            </Icon> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 3,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              miks
            </Typography>

            {/* Web view */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                color: navMagicTexts,
              }}
            ></Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
