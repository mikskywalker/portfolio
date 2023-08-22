import { Grid, Typography } from "@mui/material";
import React from "react";
import MiksImageList from "../components/MiksImageList";

export default function HomePage() {
  return (
    <Grid
      container
      spacing={3}
      alignContent="center"
      justifyContent="center"
      sx={{ background: "black", height: "100%", marginTop: '3rem' }}
    >
      <Grid item xs={9} >
        <Typography
          variant="h3"
          color="white"
          
        >
          hey, I'm Miks 👋🏼
        </Typography>
      </Grid>
      <Grid item xs={9} >
        <Grid container direction="row">
          <Grid item>
            <Typography
              variant="h6"
              color="lightgray"
            >
              I'm a frontend developer, a performing musician, and a mentor to adult 🎻
              beginners. I currently work as a Software Engineer at Smudge,
              where I build web applications for an array of projects and
              clients like The Coca-cola Company 🥤.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              color="#0BD99E"
              textAlign="center"
            ></Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <MiksImageList />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h6" color="lightgray">
          I create educational content for aspiring violinists, teaching them about my philosophy,
          techniques, and approach in learning music and using playing violin.
          This comes in all forms: blog posts, videos, tweets, conference talks,
          and workshops. You can watch some of my favorites below.
        </Typography>
      </Grid>
    </Grid>
  );
}
