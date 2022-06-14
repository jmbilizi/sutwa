import * as React from "react";
import { useRouter } from "next/router";
import Navbar from "../../Navbar/index";
import Jambotron from "../../Jambotron";
// Modal
import Modal from "../../Modal";
import AccountLoginPage from "../../Account/AccountLoginPage";
import AccountSignupPage from "../../Account/AccountSignupPage";

const MainLayout = ({ children }) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Modal
        open={router.asPath === "/account/login"}
        scroll="body"
        onExited={() => router.back()}
      >
        <AccountLoginPage />
      </Modal>
      <Modal
        open={router.asPath === "/account/signup"}
        scroll="body"
        onExited={() => router.back()}
      >
        <AccountSignupPage />
      </Modal>
      <Jambotron style={{}} inlineBstStyle="container-fluid">
        <Navbar />
        {children}
      </Jambotron>
    </React.Fragment>
  );
};

export default MainLayout;
