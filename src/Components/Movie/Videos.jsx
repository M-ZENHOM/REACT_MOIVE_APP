import React, { useState } from "react";
import VideoPopup from "../VideoPopup";
import Img from "../LazyLoadImage";
import Wrapper from "../Wrapper";
import { FaPlayCircle } from "react-icons/fa";

const Videos = ({ videos, isLoading }) => {
  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState(null);

  return (
    <div>
      <Wrapper className="py-10">
        <h2 className="font-bold text-2xl mb-5">Official Videos</h2>
        {!isLoading ? (
          <div className=" flex flex-wrap items-center justify-center md:justify-between cursor-pointer space-y-5 md:space-y-0">
            {videos?.results?.slice(0, 3).map((video) => (
              <div
                className="relative"
                key={video.id}
                onClick={() =>
                  window.videoModal.showModal() +
                  setVideoId(video.key) +
                  setOpen(true)
                }
              >
                <Img
                  className="rounded-xl"
                  src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                />
                <FaPlayCircle className="z-10 text-white text-4xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] " />
                <div className="w-full max-w-xs px-3">{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between cursor-pointer">
            <div className="flex flex-col space-y-5">
              <div className="w-80 h-56 rounded-xl bg-base-100 flex flex-col" />
              <progress className="progress w-56" value="60" max="100" />
            </div>
            <div className="flex flex-col space-y-5">
              <div className="w-80 h-56 rounded-xl bg-base-100 flex flex-col" />
              <progress className="progress w-56" value="60" max="100" />
            </div>
            <div className="flex flex-col space-y-5">
              <div className="w-80 h-56 rounded-xl bg-base-100 flex flex-col" />
              <progress className="progress w-56" value="60" max="100" />
            </div>
          </div>
        )}
      </Wrapper>
      <VideoPopup
        open={open}
        setOpen={setOpen}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default Videos;
