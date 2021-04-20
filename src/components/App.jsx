import React, { useEffect, useState } from 'react';
import VideoPopUp from '../components/VideoPopup.jsx';
import AlarmRegisterPage from '../pages/AlarmRegisterPage.jsx';
import { ipcRenderer } from 'electron';

export default function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

  useEffect(() => {
    ipcRenderer.on('playVieo', (event, url) => {
      setVideoUrl(url);
      setIsVideoPlayed(true);
    });
  }, []);

  return (
    <>
      {isVideoPlayed ? <VideoPopUp videoUrl={videoUrl} /> : <AlarmRegisterPage />}
    </>
  );
}
