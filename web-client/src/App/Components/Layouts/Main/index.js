import React from "react";
import Navbar from "../../Navbar/_index";
import Jambotron from "../../Jambotron";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Jambotron style={{}} inlineBstStyle="container-fluid">
        <Navbar />
        {children}
      </Jambotron>
    </React.Fragment>
  );
};

export default MainLayout;
