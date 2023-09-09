import { Grid, Typography } from "@mui/material";
import Spline from "@splinetool/react-spline";
import CoolBadge from "./CoolBadge";
import {ReactComponent as ReactLogo} from '../assets/mikspics/icons8-react.svg'
import { ReactComponent as TypeScriptLogo } from '../assets/mikspics/icons8-typescript.svg'
import { ReactComponent as MuiLogo} from '../assets/mikspics/icons8-material-ui.svg'
import { ReactComponent as ReduxLogo} from '../assets/mikspics/icons8-redux.svg'

// logos
import SmudgeLogo from "../assets/mikspics/Screenshot 2023-08-23 194608.png";
import SplineLogo from "../assets/mikspics/spline3d.png";

export default function BioTech() {
    return (
      <>
        <Grid item xs={10} lg={7}>
          <Grid container direction="row">
            <Grid item>
              <Typography variant="body1">
                I'm a frontend developer, a musician, and a mentor. I currently
                work as a Software Engineer at &nbsp;
                <CoolBadge
                  size="default"
                  image={SmudgeLogo}
                  title="Smudge"
                  url="https://smudge.com/"
                />
                 &nbsp;where I build web applications for an array of projects like
                <strong> PACE</strong>, <strong> CCEP</strong>,{" "}
                <strong> UrStore</strong>, and <strong> Wayfind</strong> using
                technologies including the following
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={10} lg={7}>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <CoolBadge size='large' icon={ReactLogo} title="React" />
            </Grid>
            <Grid item>
              <CoolBadge size='large' icon={TypeScriptLogo} title="Typescript" />
            </Grid>
            <Grid item>
              <CoolBadge size='large' icon={ReduxLogo} title="Redux" />
            </Grid>
            <Grid item>
              <CoolBadge size='large' icon={MuiLogo} title="Material UI" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={10} lg={7}>
          <Spline
            style={{
              height: "35rem",
              width: "100%",
            }}
            scene="https://prod.spline.design/kw9QJMHVJAQjR7Kh/scene.splinecode"
            onLoad={() => {}}
          />
        </Grid>

        <Grid item xs={10} lg={7} mt={3}>
          <Typography
            variant="body1"
            style={{
              display: "inline-block",
              alignItems: "center", // Add this line for vertical alignment
            }}
          >
            In my free time, if I'm not playing games, or doing music, I like
            exploring and learning different technologies, and enrolling to
            various courses to improve my skills. That cool 3D character coding
            while inside a magic cirlce above is made with &nbsp;
            <CoolBadge
              size='default'
              image={SplineLogo}
              title="Spline"
              url="https://spline.design/"
            />
          </Typography>
        </Grid>

        <Grid item xs={10} lg={7} mt={3}>
          <Typography variant="body1">
            Moreover, I take great pride in supporting a close-knit community
            that I've built, consisting of friends and peers who are navigating
            career shifts into the tech industry.
          </Typography>
        </Grid>
      </>
    );
}