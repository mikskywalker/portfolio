import { Grid, Typography, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import BioMusic from "../../components/BioMusic";
import BioTech from "../../components/BioTech";
import Axios from "axios";
import { youtubeApiKey, hashNodeApiKey } from "../../apikey";
import { ChannelTypes, YouTubeChannelDataTypes } from "./home-types";



export default function HomePage() {

  const [materializedData, setMaterializedData] = useState<
    YouTubeChannelDataTypes | undefined
  >(undefined);

  const youTubedData: ChannelTypes = {
    channelName: materializedData ? materializedData.items[0].snippet.customUrl : '',
    thumbnailImg: materializedData ? materializedData.items[0].snippet.thumbnails.default.url : '',
    subscriberCount: materializedData ? materializedData.items[0].statistics.subscriberCount : '',
    viewCount: materializedData ? materializedData.items[0].statistics.viewCount : '',
  };
  const [blogData, setBlogData] = useState([]);
  const [tabValue, setTabValue] = React.useState("tech");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
/** 
   I can also do custom colors lke this using mui colors
  const divColor = teal['A100']
 * 
*/

  // const miksChannelId = "UCPfm7j1Wm-S7hmUgk49nf8g";
  // request to get channel data https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=UCPfm7j1Wm-S7hmUgk49nf8g&key=[YOUR_API_KEY]
  useEffect(() => {
    async function getChannelData() {
      try {
        const response = await Axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=UCPfm7j1Wm-S7hmUgk49nf8g&key=${youtubeApiKey}`
        );
        setMaterializedData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getChannelData()
  }, []);

  useEffect(() => {
    // Hashnode API endpoint and API
    const apiUrl = 'https://api.hashnode.com/';
    const apiKey = hashNodeApiKey;

    // GraphQL query
    const query = `
      {
        user(username: "mikscasal") {
          publication {
            posts(page: 0) {
              title
              slug
              brief
              readTime
              views
              dateAdded
            }
          }
        }
      }
    `;

    // the API request
    Axios
      .post(apiUrl, { query }, { headers: { Authorization: apiKey } })
      .then((response) => {
        setBlogData(response.data.data.user.publication.posts);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
      });
  }, []);

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
      <Grid item xs={12} md={7}>
        <Grid
          container
          alignContent="center"
          spacing={3}
          justifyContent="center"
        >
          <Grid item xs={10} lg={7}>
            <Grid container  pt={4}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor='secondary'
                aria-label="tabs for tech or music"
               
              >
                <Tab
                  value="tech"
                  label={<Typography>tech</Typography>}
                  disableRipple
                  sx={{
                    color: tabValue === "tech" ? "#FFFFFF" : "#D4D4C8",
                    textTransform: "none",
                    mb: -2,
                  }}
                />
                <Tab
                  value="music"
                  label={<Typography>music</Typography>}
                  disableRipple
                  sx={{
                    color: tabValue === "music" ? "#FFFFFF" : "#D4D4C8",
                    textTransform: "none",
                    mb: -2,
                    '&:hover': {
                      color: 'green',
                    }
                  }}
                />
              </Tabs>
            </Grid>
          </Grid>
   
          <Grid item xs={10} lg={7}>
            <Typography variant="h5" pt={3} color="white" fontWeight="bold">
              Hey, I'm Miks
            </Typography>
          </Grid>

          {tabValue === "tech" && <BioTech blogData={blogData} />}

          {tabValue === "music" && (
            <BioMusic
              name={youTubedData.channelName}
              thumbnail={youTubedData?.thumbnailImg}
              subscriberCount={youTubedData.subscriberCount}
              viewCount={youTubedData.viewCount}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
