import React from 'react';
import YouTube from "react-youtube";
import styled from 'styled-components';
import { ipcRenderer } from 'electron';
import { sendStats } from '../apis/index';

const PopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
`;

export default function VideoPopup({ videoUrl, campaignId, content }) {
  let videoCode;

  if (videoUrl) {
    videoCode = videoUrl.split('v=')[1].split('&')[0];
  }

  const checkElapsedTime = (event) => {
    if (event.data === 0) {
      ipcRenderer.send('closevideo');
    }
  };

  const opts = {
    playerVars: {
      autoplay: 1
    }
  };

  function handleClickBanner(event) {
    event.preventDefault();

    sendStats(campaignId, 'click');
  }

  return (
    <PopupWrapper>
      <div>
        <h1>Video</h1>
      </div>
      <div>
        <div>
          <YouTube
            videoId={videoCode}
            allow="fullscreen;"
            containerClassName="embed embed-youtube"
            onStateChange={(event) => checkElapsedTime(event)}
            opts={opts}
          />
        </div>
      </div>
      <div>
        <a href="https://www.naver.com/" target="_blank">
          <img
            src={content}
            width="100%"
            height="100px"
            onClick={handleClickBanner}
          />
        </a>
      </div>
    </PopupWrapper>
  );
}
