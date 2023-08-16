import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import {
  Box,
  Fab,
  Fade,
  Grid,
  Grow,
  ThemeProvider,
  createTheme,
  useScrollTrigger,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import { blue, grey, red } from "@mui/material/colors";
import Footer from "./components/Footer";

// icons
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";


// need for overiding mui components on ts
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
    btnLink: true;
  }
}

const theme = createTheme({
  components: {
    // creating new button variants
    MuiButton: {
      variants: [
        {
          props: {
            variant: "btnLink",
          },
          style: {
            textTransform: "none",
            padding: 0,
            margin: 0,
            disableRipple: true,
            "&:hover": { background: "transparent" },
            "&:after": {
              content: '""',
              display: "block",
              position: "absolute",
              bottom: "-2px",
              left: 0,
              width: "0%",
              height: "2px",
              background: "#0BD99E",
              transition: "width .3s",
            },
            "&:hover:after": {
              width: "100%",
            },
          },
        },
      ],
    },
  },
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

/**
 *
 * Back to Top Button logic
 *
 *  */
interface Props {
  children?: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 400,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function App(props: Props) {
  const [fabHover, setFabHover] = useState<boolean>(false);

  /** for the scroll to top Fab btn changing color logic */
  const [toTopBtnColor, setToTopBtnColor] = useState<"black" | "white">(
    "black"
  );
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleScroll = () => {
    if (window.scrollY >= 0) {
      setToTopBtnColor("black");
    }
    if (window.scrollY >= 710) {
      setToTopBtnColor("white");
    }
    if (window.scrollY >= 1720) {
      setToTopBtnColor("black");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: 'black'
        }}
      >
        {/* This grid is an anchor for the back-to-top button */}
        <Grid id="back-to-top-anchor" />
        <Box sx={{ flexGrow: 1 }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Nav />}>
                <Route index element={<HomePage />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Box>
        <ScrollTop {...props}>
          <Fab
            aria-label="scroll back to top"
            disableRipple
            sx={{
              width: "5rem",
              height: "5rem",
              fontSize: "4rem",
              background: "transparent",
              boxShadow: "none",
              "&:hover": { background: "none" },
            }}
            onMouseOver={() => setFabHover(true)}
            onMouseOut={() => setFabHover(false)}
          >
            {fabHover ? (
              <Grow in={fabHover}>
                <KeyboardDoubleArrowUpOutlinedIcon
                  fontSize="inherit"
                  sx={{ color: toTopBtnColor }}
                />
              </Grow>
            ) : (
              <KeyboardArrowUpOutlinedIcon
                fontSize="inherit"
                sx={{ color: toTopBtnColor }}
              />
            )}
          </Fab>
        </ScrollTop>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
