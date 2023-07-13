import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1360px] mx-auto px-2 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
