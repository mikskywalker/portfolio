import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

// icons
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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

  const supportItemList = [
    { id: 1, title: "Guidelines for using copyrighted content" },
    { id: 2, title: "Service withdrawal" },
    { id: 3, title: "Defect information" },
    { id: 4, title: "E-mail magazine" },
    { id: 5, title: "Inquiry" },
    { id: 6, title: "FAQ" },
  ];

  const libraryItemList = [
    { id: 1, title: "Official Broadcast" },
    { id: 2, title: "Screenshots" },
    { id: 3, title: "Fan Kit" },
    { id: 4, title: "Movie" },
  ];

  return (
    <Box pt={4} bgcolor='white' color='black'>
      <Grid container spacing={5} justifyContent="center" mb={2}>
        {/*  news, blogs, library*/}
        <Grid item>
          <Grid container>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h6"> News</Typography>
                  <Button variant="btnLink" {...coolBtnProps}>
                    notice
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="btnLink" {...coolBtnProps}>
                    all
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Library */}
        <Grid item>
          <Typography variant="h6"> Library</Typography>
          <Grid container direction="column">
            {libraryItemList.map((item) => (
              <Grid item key={item.id}>
                <Button variant="btnLink" {...coolBtnProps}>
                  {item.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* support */}
        <Grid item>
          <Typography variant="h6"> Support</Typography>
          <Grid container direction="column">
            {supportItemList.map((item) => (
              <Grid item key={item.id}>
                <Button variant="btnLink" {...coolBtnProps}>
                  {item.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* social media */}
        <Grid item mb={2}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Typography gutterBottom variant="body2">
                Official Twitter Account
              </Typography>
              <Button
                size="large"
                variant="outlined"
                startIcon={<TwitterIcon />}
                endIcon={<ArrowOutwardIcon />}
              >
                @learnviolin_adventure
              </Button>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="body2">
                Official Youtube Channel
              </Typography>
              <Button
                size="large"
                variant="outlined"
                startIcon={<TwitterIcon />}
                endIcon={<ArrowOutwardIcon />}
              >
                Learn Violin
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* bottom */}
      <Grid container justifyContent="center" spacing={3} pt={2} pb={2}>
        <Grid item>
          <Button {...coolBtnProps} variant="btnLink">
            Terms of use
          </Button>
        </Grid>
        <Grid item>
          <Button {...coolBtnProps} variant="btnLink">
            Privacy Policy
          </Button>
        </Grid>
        <Grid item>
          <Button {...coolBtnProps} variant="btnLink">
            Browser operating environment
          </Button>
        </Grid>
        <Grid item>
          <Button {...coolBtnProps} variant="btnLink">
            Inquiry
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
