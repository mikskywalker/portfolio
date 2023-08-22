import * as React from 'react';
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

export default function MiksImageList() {
  return (
    <Box sx={{ maxWidth: '100%', height: '100%' }}>
      <ImageList variant="quilted" cols={3} gap={12}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{borderRadius: '5px'}}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

// add better pics here in the future
const itemData = [
  {
    img: `${myImage5}`,
    title: 'Bed',
  },
  {
    img: `${myImage2}`,
    title: 'Bed',
  },
  {
    img: `${myImage4}`,
    title: 'Bed',
  },
  {
    img: `${myImage1}`,
    title: 'Bed',
  },
  {
    img: `${myImage3}`,
    title: 'Bed',
  },
 
  {
    img: `${myImage6}`,
    title: 'Bed',
  },
  {
    img: `${myImage7}`,
    title: 'Bed',
  },
  {
    img: `${myImage8}`,
    title: 'Bed',
  },
  {
    img: `${myImage9}`,
    title: 'Bed',
  },
 

];
