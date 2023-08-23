import React from "react";
import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";

// icons
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  /**
   * why not make a new custom btn?
   *
   * - it's too much of a hassle. I'll have to name it, and will cause more time to understand all the custom components in the future.
   * I prefer making a new variant of the
   * existing mui components instead of creating new custom components
   * */

  const coolBtnProps = {
    disableRipple: true,
    disableFocusRipple: true,
    disableTouchRipple: true,
  };

  return (
    <Box bgcolor="#000000">
      <Grid
        container
        justifyContent="center"
        spacing={3}
        pt={2}
        pb={2}
        color="white"
      >
        <Grid item xs={9} lg={7}>
          <Grid container spacing={1} color="white">
            <Grid item xs="auto" md={4}>
              <Button
                disableRipple
                variant="text"
                component={Link}
                href="https://twitter.com/mikscasal"
                startIcon={<TwitterIcon />}
                sx={{ textTransform: "none", fontSize: "large" }}
              >
                Follow me on twitter
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                disableRipple
                component={Link}
                href="https://www.linkedin.com/in/mikscasal/"
                variant="text"
                startIcon={<LinkedInIcon sx={{ color: "#0077B5" }} />}
                sx={{ textTransform: "none", fontSize: "large" }}
              >
                Let's connect on LinkedIn
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={9} lg={7}>
          <Grid container spacing={1}>
            <Grid item>
              <IconButton
                component={Link}
                href="https://github.com/mikskywalker"
                color="primary"
                aria-label="github"
              >
                <GitHubIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton
                component={Link}
                href="https://www.youtube.com/channel/UCPfm7j1Wm-S7hmUgk49nf8gr"
                color="primary"
                aria-label="youtube"
              >
                <YouTubeIcon />
              </IconButton>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
