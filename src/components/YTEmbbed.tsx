import { Box } from '@mui/material';
import React from 'react';

interface YoutubeEmbedTypes {
    url: string
}
// im just using this for less than 10 videos so this should be fine.
// however, if in the future I decide to make this website bigger, I will 
// look into thirdparty libraries

const YouTubeEmbed = (props: YoutubeEmbedTypes) => {
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <iframe
        title="YouTube Video"
        width="100%"
        height="315"
        src={props.url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
        // scrolling="no"
      ></iframe>
    </Box>
  );
};

export default YouTubeEmbed;
