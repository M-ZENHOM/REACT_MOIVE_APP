import React from "react";
import Img from "../LazyLoadImage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1,
  },
};
const Casts = ({ credits, creditsLoading }) => {
  return (
    <div className="w-full max-w-xs mx-auto md:max-w-[700px] lg:max-w-[1360px]">
      <h2 className="font-bold text-3xl px-4 mb-5">Top Cast</h2>
      {!creditsLoading ? (
        <Carousel responsive={responsive} keyBoardControl={true}>
          {credits?.cast.map((c) => (
            <div
              key={c?.id}
              className="flex flex-col items-center justify-center"
            >
              <Img
                className="rounded-full w-40 h-40 object-cover"
                src={
                  c?.profile_path
                    ? `${process.env.REACT_APP_POSTAR_IMG}${c?.profile_path}`
                    : process.env.REACT_APP_UNAVAILABLE_IMG
                }
              />
              <h2 className="font-bold text-xl">{c?.name}</h2>
              <span>{c?.character}</span>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="flex justify-between items-center px-10 ">
          {[1, 2, 3, 4, 5, 6].map((s, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <div className="rounded-full w-40 h-40 bg-base-100" />
              <progress className="progress w-32" value="80" max="100" />
              <progress className="progress w-32" value="60" max="100" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Casts;
