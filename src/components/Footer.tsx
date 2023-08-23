import React from "react";
import { Box, Button, Grid, IconButton, Link, Typography } from "@mui/material";

// icons
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
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
        pb={10}
        color="white"
      >
        <Grid item xs={9} lg={7}>
          <Grid container spacing={1} color="white">
            <Grid item xs={12} md="auto">
              <Button
                {...coolBtnProps}
                variant="text"
                component={Link}
                href="https://twitter.com/mikscasal"
                startIcon={<TwitterIcon />}
                sx={{ textTransform: "none" }}
              >
                Follow me on twitter
              </Button>
            </Grid>

            <Grid item xs={12} md="auto">
              <Button
                 {...coolBtnProps}
                component={Link}
                href="https://www.linkedin.com/in/mikscasal/"
                variant="text"
                startIcon={<LinkedInIcon sx={{ color: "#0077B5" }} />}
                sx={{ textTransform: "none"  }}
              >
                Let's connect on LinkedIn
              </Button>
            </Grid>

            <Grid item xs={12} md="auto">
              <Button
               {...coolBtnProps}
                component={Link}
                href="https://github.com/mikskywalker"
                color="primary"
                aria-label="github"
                startIcon={<GitHubIcon />}
                sx={{ textTransform: "none" }}
              >
                Github
              </Button>
            </Grid>

            <Grid item  xs={12} md="auto">
              <Button
                {...coolBtnProps}
                component={Link}
                href='https://youtube.com/@MiksCasal'
                color="primary"
                aria-label="youtube"
                startIcon={<YouTubeIcon />}
                sx={{ textTransform: "none" }}
              >
               Youtube 
              </Button>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
