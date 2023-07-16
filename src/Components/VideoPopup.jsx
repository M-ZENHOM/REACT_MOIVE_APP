import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPopup = ({ open, setOpen, videoId, setVideoId }) => {
  const hidePopup = () => {
    setOpen(false);
    setVideoId(null);
  };
  return (
    <dialog id="videoModal" className={`modal ${open ? "visible" : ""}`}>
      <form method="dialog" className="modal-box max-w-5xl py-16">
        <button
          onClick={hidePopup}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="50vh"
        />
      </form>
    </dialog>
  );
};

export default VideoPopup;
