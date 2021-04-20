import React, { useEffect, useState } from 'react';
import VideoPopUp from '../components/VideoPopup.jsx';
import AlarmRegisterPage from '../pages/AlarmRegisterPage.jsx';
import { ipcRenderer } from 'electron';

export default function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const [campaignId, setCampaignId] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    ipcRenderer.on('playVieo', (event, url) => {
      setVideoUrl(url);
      setCampaignId(campaignId);
      setContent(content);
      setIsVideoPlayed(true);
    });
  }, []);

  return (
    <>
      {isVideoPlayed
        ? <VideoPopUp
          videoUrl={videoUrl}
          campaignId={campaignId}
          content={content}
        />
        : <AlarmRegisterPage />}
    </>
  );
}
