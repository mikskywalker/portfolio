import { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import myImage2 from '../assets/mikspics/2.jpg';
import myImage3 from '../assets/mikspics/3.jpg';
import myImage5 from '../assets/mikspics/5.jpg';
import myImage6 from '../assets/mikspics/6.jpg';
import myImage8 from '../assets/mikspics/8.jpg';
import myImage9 from '../assets/mikspics/9.jpg';
import { Fade, Grid, Skeleton, useMediaQuery, useTheme   } from '@mui/material';

export default function MiksImageList() {
  const [loading, setLoading] = useState<boolean>(true)
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    return () => {
      clearTimeout(timer); // Clear the timeout if the component unmounts
    };
  }, []);

  
  return (
    <Box sx={{ maxWidth: "100%", maxHeight: "100%" }}>
      <ImageList
        variant="masonry"
        cols={isSmallScreen ? 2 : 3}
        gap={12}
        sx={{ minWidth: 200, minHeight: 200 }}
      >
        {itemData.map((item, index) => (
          <Fade key={index} in style={{ transitionDelay: `${index * 100}ms` }}>
            <ImageListItem>
              {loading ? (
                <Grid container direction="row" spacing={1}>
                  <Grid item xs>
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      sx={{ bgcolor: "grey.900", minHeight: 200 }}
                    />
                  </Grid>
                </Grid>
              ) : (
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: "5px" }}
                />
              )}
            </ImageListItem>
          </Fade>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: `${myImage5}`,
    title: 'Played for a company event',
  },
  
  {
    img: `${myImage2}`,
    title: 'Performing on stage with a band',
  },
  {
    img: `${myImage3}`,
    title: 'Performing on stage with my string quartet',
  },
  {
    img: `${myImage8}`,
    title: 'Performing live at a wake',
  },
  {
    img: `${myImage6}`,
    title: 'After playing for a church anniversarry',
  },

  {
    img: `${myImage9}`,
    title: 'With my string quartet in front of a giant Pipe Organ',
  },
 
];
