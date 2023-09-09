import React from "react";
import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";

// icons
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import CallMadeIcon from "@mui/icons-material/CallMade";
import { themes } from "../App";

export default function Footer() {
  // props to make the btn simpler and remove the ripples
  const linkBtnProps = {
    disableRipple: true,
    disableFocusRipple: true,
    disableTouchRipple: true,
  };

  return (
    <Box bgcolor="#111010">
      <Grid container justifyContent="center" spacing={3} pb={5} color="white">
        <Grid item xs={12} md={7}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={10} lg={7}>
              <Grid
                container
                spacing={3}
                color={themes.palette.secondary.contrastText}
              >
                <Grid item xs={12} md="auto">
                  <Button
                    {...linkBtnProps}
                    variant="btnLink"
                    href="https://www.linkedin.com/in/mikscasal/"
                    startIcon={<LinkedInIcon sx={{ color: "#0077B5" }} />}
                    // endIcon={<CallMadeIcon />}
                    color="inherit"
                  >
                    Let's connect on LinkedIn
                  </Button>
                </Grid>

                <Grid item xs={12} md="auto">
                  <Button
                    {...linkBtnProps}
                    variant="btnLink"
                    component={Link}
                    target="_blank"
                    href="https://twitter.com/mikscasal"
                    startIcon={<TwitterIcon />}
                    // endIcon={<CallMadeIcon />}
                    sx={{ textTransform: "none" }}
                    color="inherit"
                  >
                    Follow me on twitter
                  </Button>
                </Grid>

                <Grid item xs={12} md="auto">
                  <Button
                    {...linkBtnProps}
                    variant="btnLink"
                    component={Link}
                    target="_blank"
                    href="https://github.com/mikskywalker"
                    color="inherit"
                    aria-label="github"
                    startIcon={<GitHubIcon />}
                    // endIcon={<CallMadeIcon />}
                  >
                    Github
                  </Button>
                </Grid>

                <Grid item xs={12} md="auto">
                  <Button
                    {...linkBtnProps}
                    variant="btnLink"
                    component={Link}
                    target="_blank"
                    href="https://youtube.com/@MiksCasal"
                    color="inherit"
                    aria-label="youtube"
                    startIcon={<YouTubeIcon />}
                  >
                    Youtube
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body2" fontStyle='italic'>
                    Icons used for this portfolio are from&nbsp;
                    <Link
                      underline="hover"
                      target="_blank"
                      href="https://mui.com/material-ui/material-icons/"
                      sx={{ textTransform: "none", fontWeight: "bold" }}
                      color={themes.palette.secondary.light}
                    >
                      MUI
                    </Link>
                    &nbsp;and&nbsp;
                    <Link
                      underline="hover"
                      target="_blank"
                      href="https://icons8.com/"
                      sx={{ textTransform: "none", fontWeight: "bold" }}
                      color={themes.palette.secondary.light}
                    >
                      Icons8
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
