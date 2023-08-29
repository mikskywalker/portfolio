import { useState } from "react";
import { Grid, Typography, Link } from "@mui/material";
import Spline from "@splinetool/react-spline";
import CoolBadge from "./CoolBadge";
import TechStack from "./TechStackIconList";

import SmudgeLogo from "../assets/mikspics/Screenshot 2023-08-23 194608.png";
import SplineLogo from "../assets/mikspics/spline3d.png";
import PsyduckLogo from "../assets/mikspics/icons8-psyduck-24.png";
import LeviLogo from "../assets/mikspics/levi.jpg";
import CallMadeIcon from "@mui/icons-material/CallMade";

export default function BioTech() {
    const [pageStillLoading, setPageStillLoading] = useState<Boolean>(true);
    return (
        <>
        <Grid item xs={10} lg={7}>
          <Grid container direction="row">
            <Grid item>
              <Typography variant="body1">
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
          <Spline
            style={{
              height: "30rem",
              width: "100%",
            }}
            scene="https://prod.spline.design/kw9QJMHVJAQjR7Kh/scene.splinecode"
            onLoad={() => {
              console.log("3d has been loaded");
              setPageStillLoading(false);
            }}
          />
        </Grid>

        <Grid item xs={10} lg={7}>
          <Typography variant="body1" >
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
          <Typography variant="body1">
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
          <Typography variant="body1">
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
           
            gutterBottom
          >
            The <span color="#0BD99E">technologies</span> I use includes
          </Typography>
          <TechStack />
        </Grid>
      </>
    )
}