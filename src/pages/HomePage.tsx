import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Link,
  Skeleton,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import MiksImageList from "../components/MiksImageList";
import TechStack from "../components/TechStackIconList";
import SmudgeLogo from "../assets/mikspics/Screenshot 2023-08-23 194608.png";
import SplineLogo from "../assets/mikspics/spline3d.png";
import PsyduckLogo from "../assets/mikspics/icons8-psyduck-24.png";
import LeviLogo from "../assets/mikspics/levi.jpg";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CoolBadge from "../components/CoolBadge";
import SpotifyEmbed from "../components/SpotifyEmbbed";
import YouTubeEmbed from "../components/YTEmbbed";
import Spline from "@splinetool/react-spline";
// import { red, teal } from "@mui/material/colors";

export default function HomePage() {
  const [tabValue, setTabValue] = React.useState("tech");
  const [pageStillLoading, setPageStillLoading] = useState<Boolean>(true);
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  /** 
     I can also do custom colors lke this using mui colors
      const divColor = teal['A100']
   * 
   */

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        height: "100%",
        marginTop: "1.5rem",
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
          <Grid item xs={10} lg={7}>
            <Grid container>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                // indicatorColor="secondary"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: '#0BD99E',
                  },
                }}
                aria-label="tabs for tech or music"
              >
                <Tab
                  value="tech"
                  label={<Typography >tech</Typography>}
                  disableRipple
                  sx={{
                    color: tabValue === "tech" ? "#FFFFFF" : "#D4D4C8",
                    textTransform: "none",
                    // fontSize: "large",
                  }}
                />
                <Tab
                  value="music"
                  label={<Typography >music</Typography>}
                  disableRipple
                  sx={{
                    color: tabValue === "music" ? "#FFFFFF" : "#D4D4C8",
                    textTransform: "none",
                    // fontSize: "large",
                  }}
                />
              </Tabs>
            </Grid>
          </Grid>

          <Grid item xs={10} lg={7}>
            <Typography variant="h5" pt={3} color="white" fontWeight="bold">
              hey, I'm Miks 👋
            </Typography>
          </Grid>

          {tabValue === "tech" && (
            <>
              <Grid item xs={10} lg={7}>
                <Grid container direction="row">
                  <Grid item>
                    <Typography variant="body1" color="primary">
                      I'm a frontend developer, a musician, and a mentor. I
                      currently work as a Software Engineer at &nbsp;
                      <CoolBadge
                        image={SmudgeLogo}
                        title="Smudge"
                        url="https://smudge.com/"
                      />
                      , where I build web applications for an array of projects
                      and clients like CONA Services under the legendary, The
                      Coca-cola Company.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={10} lg={7}>
                {pageStillLoading && (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    sx={{ bgcolor: "grey.900" }}
                    height="30rem"
                  />
                )}
                <Spline
                  style={{
                    height: "30rem",
                    width: "100%",
                  }}
                  scene="https://prod.spline.design/kw9QJMHVJAQjR7Kh/scene.splinecode"
                  onLoad={() => setPageStillLoading(false)}
                />
              </Grid>

              <Grid item xs={10} lg={7}>
                <Typography variant="body1" color="primary">
                  Over the past years, I've dedicated my efforts to building web
                  applications for various industries like logistics at&nbsp;
                  <strong>Entrego</strong>, bottling at&nbsp;
                  <strong>Coke CONA</strong>, and merchandising industry
                  at&nbsp;
                  <strong>UrStore</strong> while greatly improving my skills
                  along the way.
                </Typography>
              </Grid>

              <Grid item xs={10} lg={7}>
                <Typography variant="body1" color="primary">
                  In 2020 during the pandemic, I created an online violin studio
                  where I teach adult beginners and build its web application.
                </Typography>
              </Grid>

              <Grid item xs={10} lg={7}>
                <Link
                  variant="body1"
                  underline="none"
                  rel="noopener"
                  target="_blank"
                  href="https://www.facebook.com/learnviolinofficial"
                >
                  <Grid
                    container
                    spacing={1}
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      // background: themes.palette.secondary.main,
                      background: "#262626",
                      height: "5rem",
                      border: "1px solid #404040",
                      borderRadius: 1,
                      textTransform: "none",
                      fontWeight: "bold",
                      color: "lightgray",
                    }}
                  >
                    <Grid item>
                      <Grid container spacing={1} alignItems="center" pl={1}>
                        <Grid item>
                          <img
                            src={LeviLogo}
                            width="50px"
                            style={{ borderRadius: 50 }}
                          />
                        </Grid>
                        <Grid item>Learn Violin</Grid>
                      </Grid>
                    </Grid>
                    <Grid item pr={1}>
                      <CallMadeIcon />
                    </Grid>
                  </Grid>
                </Link>
              </Grid>

              <Grid item xs={10} lg={7}>
                <Typography
                  variant="body1"
                  color="primary"
                  style={{
                    display: "inline-block",
                    alignItems: "center", // Add this line for vertical alignment
                  }}
                >
                  On my free time, I like trying out different technologies like
                  building 3D web scenes, or learning machine learning. Here's a
                  3D scene with Psyduck and another pokemon I made using &nbsp;
                  <CoolBadge
                    image={SplineLogo}
                    title="Spline"
                    url="https://spline.design/"
                  />
                  .
                </Typography>
              </Grid>

              <Grid item xs={10} lg={7}>
                {/* <Button
                      {...coolBtnProps}
                      variant="contained"
                      color="secondary"
                      component={Link}
                      rel="noopener"
                      target="_blank"
                      href="https://mikskywalker.github.io/psyduckshouse"
                      startIcon={<img src={PsyduckLogo} width="50px" />}
                      endIcon={<CallMadeIcon />}
                      sx={{
                        textTransform: "none",
                        border: "1px solid #404040",
                        height: "5rem",
                        fontWeight: "bold",
                      }}
                    >
                      Psyduck's House
                    </Button> */}

                <Link
                  variant="body1"
                  underline="none"
                  rel="noopener"
                  target="_blank"
                  href="https://mikskywalker.github.io/psyduckshouse"
                >
                  <Grid
                    container
                    spacing={1}
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      // background: themes.palette.secondary.main,
                      background: "#262626",
                      height: "5rem",
                      border: "1px solid #404040",
                      borderRadius: 1,
                      textTransform: "none",
                      fontWeight: "bold",
                      color: "lightgray",
                    }}
                  >
                    <Grid item>
                      <Grid container spacing={1} alignItems="center" pl={1}>
                        <Grid item>
                          <img
                            src={PsyduckLogo}
                            width="50px"
                            style={{ borderRadius: 50 }}
                          />
                        </Grid>
                        <Grid item> Psyduck's House</Grid>
                      </Grid>
                    </Grid>
                    <Grid item pr={1}>
                      <CallMadeIcon />
                    </Grid>
                  </Grid>
                </Link>
              </Grid>

              <Grid item xs={10} lg={7}>
                <Typography variant="body1" color="primary">
                  Beyond coding, I actively perform with my string quartet or
                  other music friends, and help a community I built made up of
                  friends and peers in their career shift journey in tech (2 of
                  them have already landed jobs this year ♥)
                </Typography>
              </Grid>

              <Grid item xs={10} lg={7}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="primary"
                  gutterBottom
                >
                  The <span color="#0BD99E">technologies</span> I use includes
                </Typography>
                <TechStack />
              </Grid>
            </>
          )}

          {tabValue === "music" && (
            <>
              <Grid item xs={10} lg={7}>
                <Typography variant="body1" color="primary">
                  I create covers for various genres such as
                  <strong> anime</strong>, <strong>korean drama</strong>,
                  <strong> video game music</strong>, and many more. (My
                  favorites are, of course, anime and video game music 😁)
                </Typography>
              </Grid>

              <Grid item xs={10} lg={7}>
                <MiksImageList />
              </Grid>

              <Grid item xs={10} lg={7}>
                <Typography variant="body1" color="primary" pb={1}>
                  Here are some of my favorite covers:
                </Typography>
                <Grid container justifyContent="center" spacing={3} pt={1}>
                  <Grid item xs={12} lg={10}>
                    <YouTubeEmbed url="https://www.youtube.com/embed/2EiB77T_jt0?si=50sz6-6E9qWdRdno" />
                    <Typography
                      // TODO: get real time numbers. Might need a youtube developer account?
                      variant="body1"
                      color="gray"
                      pb={2}
                    >
                      7.8K views • 3 years ago • 396 likes
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={10}>
                    <YouTubeEmbed url="https://www.youtube.com/embed/lopObyZ2ipw?si=4noF8ac3aSxDbh3Y" />
                    <Typography variant="body1" color="gray" pb={2} pt={1}>
                      11K views • 3 years ago • 436 likes
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={10}>
                    <YouTubeEmbed url="https://www.youtube.com/embed/G4JQnw7lM1I?si=8S_atpKwovic_l5y" />
                    <Typography variant="body1" color="gray" pb={2} pt={1}>
                      23K views • 3 years ago • 706 likes
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={10} lg={7}>
                <Typography variant="body1" color="primary">
                  I was a violinist at the Manila Symphony Orchestra before and
                  in 2013 I joined a string quartet called the Manila String
                  Machine and we've been actively performing for different
                  concerts, weddings, corporate parties, and all kinds of event
                  till today just like this performance in a popular cafe in
                  Manila.
                </Typography>
              </Grid>

              <Grid item xs={10} lg={7}>
                <Grid container justifyContent="center">
                  <Grid item xs={12} lg={10}>
                    <YouTubeEmbed url="https://www.youtube.com/embed/aNkWRxgfcAg?si=48-PHjNHvRPkpu2w" />
                    <Typography variant="body1" color="gray" pb={1} pt={1}>
                      467 views • 1 year ago • 13 likes
                    </Typography>
                  </Grid>
                </Grid>

                {/* <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <BigBtn title="who some logo" noEndIcon />
                  </Grid>
                  <Grid item xs={4}>
                    <BigBtn title="who some logo" noEndIcon />
                  </Grid>
                  <Grid item xs={4}>
                    <BigBtn title="who some logo" noEndIcon />
                  </Grid>
                </Grid> */}
              </Grid>

              <Grid item xs={10} lg={7}>
                <Typography variant="body1" color="primary" pb={1}>
                  and this random recording of us playing Nandemonaiya from Kimi
                  no Nawa (Your Name) after playing for a wedding.
                </Typography>
              </Grid>

              <Grid item xs={10} lg={7}>
                <Grid container justifyContent="center">
                  <Grid item xs={12} lg={10}>
                    <YouTubeEmbed url="https://www.youtube.com/embed/eG8OYiqGBxw?si=NTc_DjBkpGFqzzsF" />
                    <Typography variant="body1" color="gray" pb={2} pt={1}>
                      1K views • 1 year ago • 35 likes
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={10} lg={7}>
                <Typography variant="body1" color="primary">
                  Aside from performing and teaching, I also have some
                  compositions which you can find on all major steaming
                  platforms like Spotify. I'm particularly fond of fantasy or
                  epic like music which you will notice if you are following and
                  listening to my music.
                </Typography>
              </Grid>
              <Grid item xs={10} lg={6}>
                <SpotifyEmbed />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
