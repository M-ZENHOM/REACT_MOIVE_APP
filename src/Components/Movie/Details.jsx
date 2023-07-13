import React from "react";
import Img from "../LazyLoadImage";
import { convertToHours, formatDate } from "../../lib/utils";

const Details = ({ data, isLoading, credits }) => {
  const voteNum = Math.round(data?.vote_average * 10) / 10;
  const director = credits?.crew?.filter((f) => f.job === "Director");
  const writer = credits?.crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );
  return (
    <>
      {!isLoading ? (
        <div className="flex md:flex-row md:items-start space-x-10 flex-col justify-center items-center py-6">
          <Img
            className="md:w-[500px] md:h-[500px] rounded-xl w-full h-full p-4"
            src={
              data?.poster_path
                ? `${process.env.REACT_APP_POSTAR_IMG}${data?.poster_path}`
                : process.env.REACT_APP_UNAVAILABLE_IMG
            }
          />
          <div className="w-full">
            <h1 className="mb-2 md:text-4xl text-2xl font-bold">
              {data?.title || data?.name}
            </h1>
            <h1 className="mb-5 text-xl font-bold">{data?.tagline}</h1>
            <div className="space-x-2 mb-5">
              {data?.genres.map((g) => (
                <div key={g.id} className="badge badge-primary">
                  {g.name}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-5">
              <div
                className={`radial-progress  mb-5 ${
                  voteNum < 5
                    ? "text-red-500"
                    : voteNum < 7
                    ? "text-orange-500"
                    : "text-green-500"
                } `}
                style={{
                  "--value": `${Math.round(data?.vote_average * 10)}`,
                  "--size": "4rem",
                }}
              >
                {voteNum}
              </div>
            </div>
            <p className="mb-5 w-full max-w-xl flex flex-col text-xl">
              <span className="font-bold text-3xl mb-2">Overview</span>
              <span className="pr-8 md:pr-0">{data?.overview}</span>
            </p>
            <div className="mb-5 w-full max-w-xl flex flex-col text-xl">
              {data?.first_air_date && (
                <div className="flex items-center justify-start space-x-10 w-full max-w-xl">
                  <div>
                    <span className="font-bold mb-2">Seasons: </span>
                    <span className="pr-8 md:pr-0">
                      {data?.seasons.map((s) => s.season_number)}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold  mb-2">Episodes: </span>
                    <span className="pr-8 md:pr-0">
                      {data?.seasons.map((s) => s.episode_count)}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div>
              {data?.first_air_date && (
                <div className="flex items-center justify-start space-x-10 w-full max-w-xl">
                  <div className="text-xl mb-5">
                    <span className="font-bold pr-8 md:pr-0">
                      Network Name:{" "}
                    </span>
                    {data?.origin_country}
                  </div>
                  <div className="text-xl mb-5">
                    <span className="font-bold">Country: </span>
                    {data?.networks.map((n) => n.name)}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-start space-x-10 w-full max-w-xl mb-5 text-xl pr-8 md:pr-0  ">
              <div>
                <span className="font-bold">Status: </span>
                <span>{data?.status}</span>
              </div>
              <div>
                <span className="font-bold">Release Date: </span>
                <span>
                  {formatDate(data?.release_date || data?.first_air_date)}
                </span>
              </div>
              <div>
                {!data?.first_air_date && (
                  <>
                    <span className="font-bold">Runtime: </span>
                    <span>{convertToHours(data?.runtime)}</span>
                  </>
                )}
              </div>
            </div>
            {director?.length > 0 && (
              <div className="w-full max-w-lg mb-4">
                <span className="font-bold">Director: </span>
                <span>
                  {director?.map((d, i) => (
                    <span key={i}>
                      {d.name}
                      {director.length - 1 !== i && ", "}
                    </span>
                  ))}
                </span>
              </div>
            )}
            {writer?.length > 0 && (
              <div className="w-full max-w-lg mb-2 pb-4">
                <span className="font-bold">Writer: </span>
                <span>
                  {writer?.map((d, i) => (
                    <span key={i}>
                      {d.name}
                      {writer.length - 1 !== i && ", "}
                    </span>
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex md:flex-row md:items-start space-x-10 flex-col justify-center items-center py-6">
          <div className="md:w-[500px] md:h-[500px] bg-white rounded-xl w-full h-full p-4" />
          <div className="w-full">
            <h1 className="mb-2 md:text-4xl text-2xl font-bold">
              <progress className="progress w-64" value="80" max="100" />
            </h1>
            <h1 className="mb-5 text-xl font-bold">
              <progress className="progress w-56" value="50" max="100" />
            </h1>
            <div className="space-x-2 mb-5">
              {data?.genres.map((g) => (
                <progress
                  key={g.id}
                  className="progress w-20"
                  value="50"
                  max="100"
                />
              ))}
            </div>
            <div className="flex items-center space-x-5">
              <div className="mb-5 rounded-full bg-base-100 w-24 h-24 " />
            </div>
            <p className="mb-5 w-full max-w-xl flex flex-col text-xl space-y-10">
              <progress className="progress w-80" value="80" max="100" />
              <progress className="progress w-72" value="70" max="100" />
              <progress className="progress w-60" value="60" max="100" />
              <progress className="progress w-56" value="50" max="100" />
            </p>
            <div className="mb-5 w-full max-w-xl flex flex-col text-xl">
              {data?.first_air_date && (
                <div className="flex items-center justify-start space-x-10 w-full max-w-xl">
                  <div>
                    <progress className="progress w-56" value="50" max="100" />
                  </div>
                  <div>
                    <progress className="progress w-56" value="50" max="100" />
                  </div>
                </div>
              )}
            </div>
            <div>
              {data?.first_air_date && (
                <div className="flex items-center justify-start space-x-10 w-full max-w-xl">
                  <div className="text-xl mb-5">
                    <progress className="progress w-56" value="50" max="100" />
                  </div>
                  <div className="text-xl mb-5">
                    <progress className="progress w-56" value="50" max="100" />
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-start space-x-10 w-full max-w-xl mb-5 text-xl pr-8 md:pr-0  ">
              <div>
                <progress className="progress w-40" value="50" max="100" />
              </div>
              <div>
                <progress className="progress w-40" value="50" max="100" />
              </div>
              <div>
                {!data?.first_air_date && (
                  <>
                    <progress className="progress w-40" value="50" max="100" />
                  </>
                )}
              </div>
            </div>
            {director?.length > 0 && (
              <div className="w-full max-w-lg mb-4">
                <progress className="progress w-60" value="50" max="100" />
              </div>
            )}
            {writer?.length > 0 && (
              <div className="w-full max-w-lg mb-2 pb-4">
                <progress className="progress w-60" value="50" max="100" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
