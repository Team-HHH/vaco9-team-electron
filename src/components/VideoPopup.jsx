import React from 'react';
import YouTube from "react-youtube";
import { ipcRenderer } from 'electron';


// const modalStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)"
//   }
// };
const checkElapsedTime = (e) => {
  console.log(e.target.playerInfo.playerState);
  const duration = e.target.getDuration();
  const currentTime = e.target.getCurrentTime();
  if (currentTime / duration > 0.95) {
    setModalIsOpen(true);
  }
};

export default function VideoPopup({ videoUrl }) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.split("v=")[1].split("&")[0];
  }

  const checkElapsedTime = (e) => {

    console.log(e.data);
    // const duration = e.target.getDuration();
    // const currentTime = e.target.getCurrentTime();
    // if (currentTime / duration > 0.95) {
    //   setModalIsOpen(true);
    // }

    if (e.data === 0) {
      ipcRenderer.send("closevideo");
    }
  };

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const handleExerciseComplete = () => console.log("Do something");

  return (
    <div>
      <div>
        <h1>Video</h1>
        <div></div>
      </div>
      <div>
        <div>
          <YouTube
            videoId={videoCode}
            allow="fullscreen;"
            containerClassName="embed embed-youtube"
            onStateChange={(e) => checkElapsedTime(e)}
            opts={opts}
          />
        </div>
      </div>
    </div>
  )
}
