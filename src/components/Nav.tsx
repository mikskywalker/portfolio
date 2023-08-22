import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

// Icons
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { purple } from "@mui/material/colors";

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
        sx={{ backgroundColor: "transparent", color: navMagicTexts }}
        elevation={trigger ? 0 : 0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MusicNoteIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: navMagicTexts,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: navMagicTexts,
              }}
            >
              M
            </Typography>

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
                {/* Mobile view */}
                <Link to="/" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography color="primary" textAlign="center">
                      Home
                    </Typography>
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/blogs" style={{ textDecoration: "none" }}>
                    <Typography color="primary" textAlign="center">
                      Blog
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <Typography color="primary" textAlign="center">
                      Contact
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/learn" style={{ textDecoration: "none" }}>
                    <Typography color="primary" textAlign="center">
                      Learn
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <MusicNoteIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              M
            </Typography>

            {/* Web view */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                color: navMagicTexts,
                // bgcolor:"white"
              }}
            >
             
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Link to="/contact">
                <Button
                  sx={{ color: navMagicTexts }}
                  onClick={handleCloseNavMenu}
                  variant="btnLink"
                >
                  Contact
                </Button>
              </Link>
           
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}