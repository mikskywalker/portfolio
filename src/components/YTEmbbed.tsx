import { Box } from '@mui/material';
import React from 'react';

interface YoutubeEmbedTypes {
    url: string
}

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
        scrolling="no"
        allowTransparency={true}
      ></iframe>
    </Box>
  );
};

export default YouTubeEmbed;
