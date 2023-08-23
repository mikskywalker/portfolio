import { Button, Grid, Typography, Tabs, Tab, Icon, Chip } from "@mui/material";
import React from "react";
import MiksImageList from "../components/MiksImageList";
import BigBtn from "../components/BigBtn";
import SmudgeLogo from "../assets/mikspics/Screenshot 2023-08-23 194608.png";
import TechStack from "../components/TechStackIconList";

export default function HomePage() {
  const [tabValue, setTabValue] = React.useState("tech");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        background: "black",
        height: "100%",
        marginTop: "3rem",
        marginBottom: "5rem",
      }}
    >
      <Grid item xs={12} md={8}>
        <Grid
          container
          alignContent="center"
          spacing={3}
          justifyContent="center"
        >
          <Grid item xs={9} lg={7}>
            <Typography variant="h5" color="white" fontWeight="bold">
              hey, I'm Miks 👋
            </Typography>
          </Grid>
          <Grid item xs={9} lg={7}>
            <Grid container direction="row">
              <Grid item>
                <Typography variant="body1" color="lightgray">
                  I'm a frontend developer, a musician, and a mentor. I
                  currently work as a Software Engineer at &nbsp;
                  <Chip
                    avatar={
                      <img
                        src={SmudgeLogo}
                        alt="Your Icon"
                        style={{
                          borderRadius: 100,
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    }
                    label="Smudge"
                    sx={{
                      background: "#1A1A1A",
                      color: "lightgray",
                      border: "1px solid lightgrey",
                      borderRadius: "5px",
                    }}
                  />
                  , where I build web applications for an array of projects and
                  clients like CONA Services under the legendary The Coca-cola
                  Company.
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
                indicatorColor="secondary"
                aria-label="tabs for tech or music"
              >
                <Tab
                  value="tech"
                  label="tech"
                  disableRipple
                  sx={{
                    color: tabValue === "tech" ? "#FFFFFF" : "lightgray",
                    textTransform: "none",
                    fontSize: "large",
                  }}
                />
                <Tab
                  value="music"
                  label="music"
                  disableRipple
                  sx={{
                    color: tabValue === "music" ? "#FFFFFF" : "lightgray",
                    textTransform: "none",
                    fontSize: "large",
                  }}
                />
              </Tabs>
            </Grid>
          </Grid>

          {tabValue === "tech" && (
            <>
              <Grid item xs={9} lg={7}>
                <Typography variant="h6" color="lightgray" gutterBottom>
                  The technologies I use includes
                </Typography>
                <TechStack />
              </Grid>

              <Grid item xs={9} lg={7}>
                <Typography variant="body1" color="lightgray">
                  Over the past few years, I've dedicated my efforts to building
                  web applications for various industries like logistics at
                  Entrego, bottling at Coke CONA, and merchandising industry at
                  UrStore while greatly improving my skills along the way.
                </Typography>
              </Grid>

              <Grid item xs={9} lg={7}>
                <Grid container spacing={1}>
                  <Grid item xs>
                    <BigBtn title="Entrego" noEndIcon />
                  </Grid>
                  <Grid item xs>
                    <BigBtn title="CONA" noEndIcon />
                  </Grid>
                  <Grid item xs>
                    <BigBtn title="UrStore" noEndIcon />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={9} lg={7}>
                <Typography variant="body1" color="lightgray">
                  Beyond coding, I actively perform with my string quartet, and
                  help a community I built made up of friends and peers in their
                  career shift journey in tech (2 of them have already landed
                  jobs ♥).
                </Typography>
              </Grid>
            </>
          )}

          {tabValue === "music" && (
            <>
              <Grid item xs={9} lg={7}>
                <Typography variant="h6" color="lightgray">
                  I create educational content for aspiring violinists, teaching
                  them about my philosophy, techniques, approach in learning
                  music, expressing and telling stories using the violin. This
                  comes in all forms: blog posts, videos, tweets, conference
                  talks, and workshops. You can watch or listen to some of my
                  favorites below.
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
                  newsletter. I try to keep things simple. You'll find writing
                  about technologies I'm interested in at the time, or how I'm
                  learning and growing in my career, sharing knowledge along the
                  way.
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
                  Plasmic, and more about developer marketing, DevRel, and
                  building open-source communities.
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
