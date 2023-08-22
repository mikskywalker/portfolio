import { Button, ButtonBase, Grid, Paper, Typography, styled  } from "@mui/material";
import CallMadeIcon from '@mui/icons-material/CallMade';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

interface BigBtnTypes {
 title: string,
 subscribers?: string,
 platform?: 'youtube' | 'spotify' | 'linkedin' | 'twitter',
 noEndIcon?: boolean
}
/** 
 * Aug 23, 2023
 * as of this time, mui does not have an icon for spotify. 😢
 * so I used fontawesome instead. I just applied the quickest way
 * which is import it via link in the index.html file. notice renders for icons
 * I might fully use the fontawesome icons in the future though 
 * 
 */
export default function BigBtn(props: BigBtnTypes) {

  return (
    <Button
      sx={{ textTransform: "none", border: "1px solid gray", height: '5rem' }}
      variant="contained"
      fullWidth
    >
      <Grid container spacing={5} justifyContent="space-between" alignItems="center">
        <Grid item xs={9}>
          <Grid container alignItems="center" textAlign='left'>
            <Grid item>
             { props.platform === 'youtube' && <YouTubeIcon fontSize="large"/>}
             { props.platform === 'spotify' && <i className="fa-brands fa-spotify fa-2xl"></i>}
             { props.platform === 'linkedin' && <LinkedInIcon fontSize="large"/>}
             { props.platform === 'twitter' && <LinkedInIcon fontSize="large"/>}
             { props.platform === 'linkedin' && <TwitterIcon fontSize="large"/>}
            </Grid>
            <Grid item ml='.3rem'>
              <Typography variant="body1" fontWeight="bold">
                {props.title}
              </Typography>
              <Typography variant="body1" color='lightgray'>{props.subscribers && `${props.subscribers} subscribers`}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} textAlign='end'>
          { props.noEndIcon === true ? '' : <CallMadeIcon />}
        </Grid>
      </Grid>
    </Button>
  );
}