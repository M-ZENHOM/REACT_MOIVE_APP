import React from "react";

const CardSkelaton = () => {
  return (
    <>
      {[1, 2, 3, 4].map((s, i) => (
        <div
          key={i}
          className="card w-full max-w-[300px] h-[500px] bg-base-100 shadow-xl"
        >
          <figure>
            <div className="bg-white w-full h-[300px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <progress
                className="progress w-56"
                value="60"
                max="100"
              ></progress>
            </h2>
            <div className="flex flex-col items-center justify-between">
              <h2>
                <progress
                  className="progress w-56"
                  value="50"
                  max="100"
                ></progress>
              </h2>
              <h2>
                <progress
                  className="progress w-56"
                  value="40"
                  max="100"
                ></progress>
              </h2>
              <h2>
                <progress
                  className="progress w-56"
                  value="30"
                  max="100"
                ></progress>
              </h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSkelaton;
