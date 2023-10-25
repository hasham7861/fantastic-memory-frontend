import React from 'react';
import styled from 'styled-components';

const YouTubeVideo = ({ videoId, width, height}) => {
  return (
    <div>
      <IFrameWrapper
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></IFrameWrapper>
    </div>
  );
};

const IFrameWrapper = styled.iframe`
  border: none; /* Remove the iframe border */
  border-radius: 8px; /* Add rounded corners to the iframe */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a subtle box shadow */
  margin-bottom: 20px; /* Add some spacing at the bottom */
`;
export default YouTubeVideo;





