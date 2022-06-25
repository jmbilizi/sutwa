import React from "react";

const Jambotron = ({ children, bg, inlineBstStyle, ...rest }) => {
  return (
    <React.Fragment>
      <div
        className={`position-relative overflow-hidden justify-content-lg-center text-center px-0 bg-${bg} ${inlineBstStyle}`}
        {...rest}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default Jambotron;
