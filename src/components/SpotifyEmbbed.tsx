import React from 'react';

const SpotifyEmbed = () => {
  return (
    <iframe
      style={{ 
      borderRadius: '12px',
      width: '100%',  // Use percentage width for responsiveness
    //   height: '0',    // Set initial height to 0 to maintain aspect ratio
    //   paddingBottom: '56.25%',  // 16:9 aspect ratio (height / width) 
    }}
      src="https://open.spotify.com/embed/playlist/4QfD0qdNvibw3U0aCpeBwK?utm_source=generator"
      width="100%"
      height="352"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyEmbed;
