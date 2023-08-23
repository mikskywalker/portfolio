import { Button, Grid, Typography, Tabs, Tab, Icon } from "@mui/material";
import React from "react";
import MiksImageList from "../components/MiksImageList";
import BigBtn from "../components/BigBtn";
import { ReactComponent as TypeScriptLogo } from '../assets/mikspics/icons8-typescript.svg'
import TechStack from "../components/TechStackIconList";


export default function HomePage() {
  const [tabValue, setTabValue] = React.useState('tech');


  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Grid
      container
      spacing={3}
      alignContent="center"
      justifyContent="center"
      sx={{
        background: "black",
        height: "100%",
        marginTop: "3rem",
        marginBottom: "5rem",
      }}
    >
      <Grid item xs={9} lg={7}>
        <Typography variant="h3" color="white">
          hey, I'm Miks 👋🏼
        </Typography>
      </Grid>
      <Grid item xs={9} lg={7}>
        <Grid container direction="row">
          <Grid item>
            <Typography variant="h6" color="lightgray">
              I'm a frontend developer, a musician, and a mentor to adult 🎻
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

      <Grid item xs={9} lg={7}>
        <MiksImageList />
      </Grid>

      <Grid item xs={9} lg={7}>
        <Grid container>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            // textColor="primary
            indicatorColor="secondary"
            aria-label="tabs for tech or music"
        
          >
            <Tab
              value="tech"
              label="Tech"
              disableRipple
              sx={{ color: tabValue === "music" ? "#FFFFFF" : "lightgray", textTransform: 'none'  }}
            />
            <Tab
              value="music"
              label="Music"
              disableRipple
              sx={{ color: tabValue === "music" ? "#FFFFFF" : "lightgray", textTransform: 'none' }}
            />
          </Tabs>
        </Grid>
      </Grid>

      {tabValue === "tech" && (
        <>
          <Grid item xs={9} lg={7}>
            <Typography variant="h6" color="lightgray">
             The technologies I use include 
            </Typography>
            <TechStack />
          </Grid>
          <Grid item xs={9} lg={7}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <BigBtn
                  title="@mikscasal"
                  subscribers="1.37K"
                  platform="youtube"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <BigBtn title="@mikscasal" platform="spotify" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Typography variant="h6" color="lightgray">
              {/* TODO:  */}
              Over the past decade, I've written content on my blog and
              newsletter. I try to keep things simple. You'll find writing about
              technologies I'm interested in at the time, or how I'm learning
              and growing in my career, sharing knowledge along the way.
            </Typography>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <BigBtn
                  title="@mikscasal"
                  subscribers="1.37K"
                  platform="youtube"
                />
              </Grid>
              <Grid item xs={12}>
                <BigBtn
                  title="@mikscasal"
                  subscribers="1.37K"
                  platform="youtube"
                />
              </Grid>
              <Grid item xs={12}>
                <BigBtn
                  title="@mikscasal"
                  subscribers="1.37K"
                  platform="youtube"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Typography variant="h6" color="lightgray">
              I invest small angel checks into early stage startups building
              tools for developers.
            </Typography>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <BigBtn title="who some logo" noEndIcon />
              </Grid>
              <Grid item xs={4}>
                <BigBtn title="who some logo" noEndIcon />
              </Grid>
              <Grid item xs={4}>
                <BigBtn title="who some logo" noEndIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Typography variant="h6" color="lightgray">
              I've also worked with or advised companies like Convex, Fauna,
              Plasmic, and more about developer marketing, DevRel, and building
              open-source communities.
            </Typography>
          </Grid>
        </>
      )}

      {tabValue === 'music' && (
        <>
               <Grid item xs={9} lg={7}>
            <Typography variant="h6" color="lightgray">
              I create educational content for aspiring violinists, teaching
              them about my philosophy, techniques, approach in learning music,
              expressing and telling stories using the violin. This comes in all
              forms: blog posts, videos, tweets, conference talks, and
              workshops. You can watch or listen to some of my favorites below.
            </Typography>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <BigBtn
                  title="@mikscasal"
                  subscribers="1.37K"
                  platform="youtube"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <BigBtn title="@mikscasal" platform="spotify" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Typography variant="h6" color="lightgray">
              {/* TODO:  */}
              Over the past decade, I've written content on my blog and
              newsletter. I try to keep things simple. You'll find writing about
              technologies I'm interested in at the time, or how I'm learning
              and growing in my career, sharing knowledge along the way.
            </Typography>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <BigBtn
                  title="@mikscasal"
                  subscribers="1.37K"
                  platform="youtube"
                />
              </Grid>
              <Grid item xs={12}>
                <BigBtn
                  title="@mikscasal"
                  subscribers="1.37K"
                  platform="youtube"
                />
              </Grid>
              <Grid item xs={12}>
                <BigBtn
                  title="@mikscasal"
                  subscribers="1.37K"
                  platform="youtube"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Typography variant="h6" color="lightgray">
              I invest small angel checks into early stage startups building
              tools for developers.
            </Typography>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <BigBtn title="who some logo" noEndIcon />
              </Grid>
              <Grid item xs={4}>
                <BigBtn title="who some logo" noEndIcon />
              </Grid>
              <Grid item xs={4}>
                <BigBtn title="who some logo" noEndIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Typography variant="h6" color="lightgray">
              I've also worked with or advised companies like Convex, Fauna,
              Plasmic, and more about developer marketing, DevRel, and building
              open-source communities.
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
}
