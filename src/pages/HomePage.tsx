import { Grid, Typography, Tabs, Tab } from "@mui/material";
import React from "react";
import BioMusic from "../components/BioMusic";
import BioTech from "../components/BioTech";

export default function HomePage() {
  const [tabValue, setTabValue] = React.useState("tech");

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
                indicatorColor="primary"
                aria-label="tabs for tech or music"
              >
                <Tab
                  value="tech"
                  label={<Typography>tech</Typography>}
                  disableRipple
                  sx={{
                    color: tabValue === "tech" ? "#FFFFFF" : "#D4D4C8",
                    textTransform: "none",
                    // fontSize: "large",
                  }}
                />
                <Tab
                  value="music"
                  label={<Typography>music</Typography>}
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

          {tabValue === "tech" && <BioTech />}

          {tabValue === "music" && <BioMusic />}
        </Grid>
      </Grid>
    </Grid>
  );
}
