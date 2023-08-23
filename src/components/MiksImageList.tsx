import { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import myImage1 from '../assets/mikspics/1.jpg';
import myImage2 from '../assets/mikspics/2.jpg';
import myImage3 from '../assets/mikspics/3.jpg';
import myImage4 from '../assets/mikspics/4.jpg';
import myImage5 from '../assets/mikspics/5.jpg';
import myImage6 from '../assets/mikspics/6.jpg';
import myImage7 from '../assets/mikspics/7.jpg';
import myImage8 from '../assets/mikspics/8.jpg';
import myImage9 from '../assets/mikspics/9.jpg';
import { Fade, Grid, Skeleton } from '@mui/material';

export default function MiksImageList() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => {
      clearTimeout(timer); // Clear the timeout if the component unmounts
    };
  }, []);

  
  return (
    <Box sx={{ maxWidth: "100%", height: "100%" }}>
      {loading ? (
        <Grid container direction="row" spacing={1}>
          {[...Array(6)].map((_, index) => (
            <Grid item xs={4} key={index}>
              <Skeleton
                variant="rectangular"
                width={210}
                height={210}
                sx={{ bgcolor: "grey.900" }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <ImageList variant="masonry" cols={3} gap={12}>
          {itemData.map((item, index) => (
            <Fade in style={{ transitionDelay: `${index * 100}ms` }}>
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: "5px" }}
                />
              </ImageListItem>
            </Fade>
          ))}
        </ImageList>
      )}
    </Box>
  );
}

// TODO: add better pics here in the future, fix titles
const itemData = [
  {
    img: `${myImage5}`,
    title: 'Played for a company event',
  },
  {
    img: `${myImage2}`,
    title: 'Performing on stage with a band',
  },
  // {
  //   img: `${myImage4}`,
  //   title: 'Solo shot',
  // },
  {
    img: `${myImage3}`,
    title: 'Performing on stage with my string quartet',
  },
  {
    img: `${myImage6}`,
    title: 'After playing for a church anniversarry',
  },
  // {
  //   img: `${myImage7}`,
  //   title: 'Leading a church orcherstra for a church event',
  // },
  {
    img: `${myImage8}`,
    title: 'Performing live at a wake',
  },
  {
    img: `${myImage9}`,
    title: 'With my string quartet in front of a giant Pipe Organ',
  },
 

];
