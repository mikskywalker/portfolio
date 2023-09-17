import { Badge, Grid, Link, Stack, Typography } from "@mui/material";
import MiksImageList from "./MiksImageList";
import SpotifyEmbed from "./SpotifyEmbbed";
import YouTubeEmbed from "./YTEmbbed";
import CoolBadge from "./CoolBadge";

// icons
import YTIcon from "../assets/mikspics/icons8-youtube.svg"
import {ReactComponent as YoutubeBadgeIcon} from '../assets/mikspics/icons8-youtube.svg'
import CallMadeIcon from "@mui/icons-material/CallMade";

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
          I have been working professionally as a musician since 2009. My music
          career began as a violinist and violist in a symphony orchestra based
          in Manila, Philippines. I have performed for all kinds of events all
          over the country with various artists and groups, especially with the
          string quartet known as The Manila String Machine, and I continue to
          do so to this day.
        </Typography>
      </Grid>

      <Grid item xs={10} lg={7}>
        <MiksImageList />
      </Grid>

      <Grid item xs={10} lg={7} mt={3}>
        <Typography variant="body1">
          I have a <CoolBadge size="default" image={YTIcon} title="Youtube" />{" "}
          channel where I do covers for <strong> anime</strong>,{" "}
          <strong>korean drama themes</strong>,
          <strong> video game music</strong>, and other genres. My favorites
          are, of course, anime and video game music. 🎻 You can check out my
          covers here
        </Typography>
      </Grid>

      <Grid item xs={10} lg={7}>
        <Link
          variant="body1"
          underline="none"
          rel="noopener"
          target="_blank"
          href="https://www.youtube.com/@MiksCasal"
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
                  <Badge
                    badgeContent={
                      <YoutubeBadgeIcon
                        width={13}
                        height={13}
                        style={{
                          background: "white",
                          borderRadius: 50,
                          padding: 2,
                        }}
                      />
                    }
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    overlap="circular"
                  >
                    <img
                      alt="youtube thumbnail"
                      src={props.thumbnail}
                      width="50px"
                      height='50px'
                      style={{ borderRadius: 50 }}
                    />
                  </Badge>
                </Grid>
                <Grid item>
                  <Stack direction="column">
                    <Typography variant="body1" lineHeight={1} fontWeight='bold'>
                      {props.name}
                    </Typography>
                    <Typography pt={0.5} variant="body2" lineHeight={1.3}>
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

      <Grid item xs={10} lg={7} mt={3}>
        <Typography variant="body1" fontStyle="italic" pb={1}>
          Here is a playlist of some of my favorites
        </Typography>
        <Grid container justifyContent="center" spacing={3} pt={1}>
          <Grid item xs={12} lg={12}>
            <YouTubeEmbed
              variant="playlist"
              playlistID="PLz5CiRXf5jzszcB6VxDKtgpEtUeh5XHFE"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10} lg={7} mt={3}>
        <Typography variant="body1">
          Aside from performing and teaching, I also have some compositions
          which you can find on all major steaming platforms like Spotify. I'm
          particularly fond of celtic, fantasy or epic like music when
          composing.
        </Typography>
      </Grid>
      <Grid item xs={10} lg={6}>
        <SpotifyEmbed />
      </Grid>
    </>
  );
}