import React, { useEffect, useState } from 'react';
import VideoPopUp from '../components/VideoPopup.jsx';
import AlarmRegisterPage from '../pages/AlarmRegisterPage.jsx';
import { ipcRenderer } from 'electron';

export default function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const [campaignId, setCampaignId] = useState('');
  const [content, setContent] = useState('');
  const [campaignUrl, serCampaignUrl] = useState('');

  useEffect(() => {
    ipcRenderer.on('playVideo', (event, campaignId, content, url, campaignUrl) => {
      setVideoUrl(url);
      setCampaignId(campaignId);
      setContent(content);
      serCampaignUrl(campaignUrl);
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
          campaignUrl={campaignUrl}
        />
        : <AlarmRegisterPage />}
    </>
  );
}
