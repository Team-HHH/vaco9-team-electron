import React, { useState } from 'react';
import YouTube from "react-youtube";
import { ipcRenderer, shell } from 'electron';
import { VideoPopup as S } from './styles';

export default function VideoPopup({ videoUrl, campaignId, content, campaignUrl }) {
  const [test, setTest] = useState(false);

  setTimeout(() => {
    setTest(true);
  }, 2000);

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
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1
    }
  };

  function handleClickBanner(event) {
    event.preventDefault();

    ipcRenderer.send('clickBanner', campaignId);
    shell.openExternal(campaignUrl);
  }

  return (
    <S.PopupWrapper>
      <S.LoadingWrapper hide={test} speed={"1s"} delay={"1.5s"}>
        <p>스트레칭 시간입니다!!</p>
      </S.LoadingWrapper>
      <S.VideoWrapper content={content}>
        <YouTube
          videoId={videoCode}
          allow="fullscreen;"
          containerClassName="embed embed-youtube"
          onStateChange={(event) => checkElapsedTime(event)}
          opts={opts}
        />
      </S.VideoWrapper>
      {content && (
        <S.BannerWrapper>
          <S.Banner
            src={content}
            onClick={handleClickBanner}
          />
        </S.BannerWrapper>
      )}
    </S.PopupWrapper>
  );
}
