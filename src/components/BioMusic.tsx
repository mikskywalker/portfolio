import { Badge, Divider, Grid, Icon, Link, Stack, Typography } from "@mui/material";
import MiksImageList from "./MiksImageList";
import SpotifyEmbed from "./SpotifyEmbbed";
import YouTubeEmbed from "./YTEmbbed";
import CoolBadge from "./CoolBadge";
import YTIcon from "../assets/mikspics/icons8-youtube.svg"
import {ReactComponent as YoutubeBadgeIcon} from '../assets/mikspics/icons8-youtube.svg'
import CallMadeIcon from "@mui/icons-material/CallMade";
import { ChannelTypes } from "../pages/HomePage";

export interface BioMusicTypes {
  name: string 
  thumbnail: string 
  subscriberCount: string 
  viewCount: string
}

export default function BioMusic(props: BioMusicTypes) {
  function numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <Grid item xs={10} lg={7}>
        <Typography variant="body1">
          I'm a musician - a violinist, who likes doing covers for{" "}
          <strong> anime</strong>, <strong>korean drama</strong>,
          <strong> video game music</strong>, and other genres. ( My favorites
          are, of course, anime and video game music 🎻)
        </Typography>
      </Grid>

      <Grid item xs={10} lg={7}>
        <MiksImageList />
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
                  <Badge badgeContent={<YoutubeBadgeIcon width={13} height={13} style={{background: 'white', borderRadius: 50, padding: 2}} />}
                   anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  overlap="circular"
                  >
                    <img
                      src={props ? props.thumbnail : "#"}
                      width="50px"
                      style={{ borderRadius: 50 }}
                    />
                  </Badge>
                </Grid>
                <Grid item>
                  <Stack direction="column" spacing={0}>
                    <Typography variant="body1" lineHeight={1}>
                      {props.name}
                    </Typography>
                      <Typography variant="body2" lineHeight={1.3}>
                        {numberWithCommas(props.subscriberCount)} subscribers
                      </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item pr={1}>
              <CallMadeIcon />
            </Grid>
          </Grid>
        </Link>
      </Grid>

      <Grid item xs={10} lg={7}>
        <Typography variant="body1" pb={1}>
          Here is a{" "}
          <CoolBadge
            image={YTIcon}
            title="Youtube"
            // url="https://smudge.com/"
          />{" "}
          playlist of some of my favorite covers
        </Typography>
        <Grid container justifyContent="center" spacing={3} pt={1}>
          <Grid item xs={12} lg={12}>
            <YouTubeEmbed
              variant="playlist"
              playlistID="PLz5CiRXf5jzuryjP8THXiXOxa4hkHZzQO"
            />
          </Grid>
          {/* 
           
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
          </Grid> */}
        </Grid>
      </Grid>

      <Grid item xs={10} lg={7}>
        <Typography variant="body1">
          I was a violinist at the Manila Symphony Orchestra before and in 2013
          I joined a string quartet called the Manila String Machine and we've
          been actively performing for different concerts, weddings, corporate
          parties, and all kinds of event all over the country. Here is a
          performance in a popular cafe in Manila.
        </Typography>
      </Grid>

      <Grid item xs={10} lg={7}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg>
            <YouTubeEmbed
              variant="default"
              url="https://www.youtube.com/embed/aNkWRxgfcAg?si=48-PHjNHvRPkpu2w"
            />
            <Typography variant="body1" color="gray" pb={1} pt={1}>
              467 views • 1 year ago • 13 likes
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10} lg={7}>
        <Typography variant="body1" pb={1}>
          Here's a random recording of us playing Nandemonaiya from Kimi no Nawa
          (Your Name) after playing for a wedding.
        </Typography>
      </Grid>

      <Grid item xs={10} lg={7}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg>
            <YouTubeEmbed
              variant="default"
              url="https://www.youtube.com/embed/eG8OYiqGBxw?si=NTc_DjBkpGFqzzsF"
            />
            <Typography variant="body1" color="gray" pb={2} pt={1}>
              1K views • 1 year ago • 35 likes
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10} lg={7}>
        <Typography variant="body1">
          Aside from performing and teaching, I also have some compositions
          which you can find on all major steaming platforms like Spotify. I'm
          particularly fond of fantasy or epic like music which you will notice
          if you are following and listening to my music.
        </Typography>
      </Grid>
      <Grid item xs={10} lg={6}>
        <SpotifyEmbed />
      </Grid>
    </>
  );
}

/**
 * keylight
 * new camera
 * 2 new mics ['for violin', 'for speaking']
 * 
 */