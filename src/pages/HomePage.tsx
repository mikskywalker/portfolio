import { Grid, Typography, Tabs, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import BioMusic, { BioMusicTypes } from "../components/BioMusic";
import BioTech from "../components/BioTech";
import Axios from "axios";

export interface ChannelTypes {
  channelName: string;
  thumbnailImg: string;
  subscriberCount: string;
  viewCount: string;
}

interface YouTubeChannelDataTypes {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: [
    {
      kind: string;
      etag: string;
      id: string;
      snippet: {
        title: string;
        description: string;
        customUrl: string;
        publishedAt: string;
        thumbnails: {
          default: {
            url: string;
            width: number;
            height: number;
          };
          medium: {
            url: string;
            width: number;
            height: number;
          };
          high: {
            url: string;
            width: number;
            height: number;
          };
        };
        localized: {
          title: string;
          description: string;
        };
        country: string;
      };
      statistics: {
        viewCount: string;
        subscriberCount: string;
        hiddenSubscriberCount: boolean;
        videoCount: string;
      };
    }
  ];
}

export default function HomePage() {
  const [tabValue, setTabValue] = React.useState("music");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const [materializedData, setMaterializedData] = useState<
    YouTubeChannelDataTypes | undefined
  >(undefined);

  const data: ChannelTypes = {
    channelName: materializedData ? materializedData.items[0].snippet.customUrl : '',
    thumbnailImg: materializedData ? materializedData.items[0].snippet.thumbnails.default.url : '',
    subscriberCount: materializedData ? materializedData.items[0].statistics.subscriberCount : '',
    viewCount: materializedData ? materializedData.items[0].statistics.viewCount : '',

  };

  /** 
     I can also do custom colors lke this using mui colors
      const divColor = teal['A100']
   * 
      */
  const APIKey = "AIzaSyAKQ1VM27uUPWt9C-xjZX3oBvdZBTzB1e4";
  const miksChannelId = "UCPfm7j1Wm-S7hmUgk49nf8g";

  // request to get channel data https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=UCPfm7j1Wm-S7hmUgk49nf8g&key=[YOUR_API_KEY]

  useEffect(() => {
    // I was triggered
    // async function getSearchData() {
    //   try {
    //     const response = await Axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${APIKey}`);
    //     console.log('data: ', response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // getSearchData()
    async function getChannelData() {
      try {
        const response = await Axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=UCPfm7j1Wm-S7hmUgk49nf8g&key=${APIKey}`
        );
        setMaterializedData(response.data);
        console.log("channel data: ", response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getChannelData()
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

          {tabValue === "music" && (
            <BioMusic
              name={data.channelName}
              thumbnail={data?.thumbnailImg}
              subscriberCount={data.subscriberCount}
              viewCount={data.viewCount}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
