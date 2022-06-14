import * as React from "react";
import { useRouter } from "next/router";
import Modal from "../../Components/Modal";
import AccountLoginPage from "../../Components/Account/AccountLoginPage";
import AccountSignupPage from "../../Components/Account/AccountSignupPage";

const AccountAction = ({ accountAction }) => {
  const router = useRouter();
  if (accountAction === "login") {
    return (
      <React.Fragment>
        <Modal
          open={true}
          scroll="body"
          onExited={() => router.push("/account")}
          children={<AccountLoginPage />}
        />
      </React.Fragment>
    );
  }
  if (accountAction === "signup") {
    return (
      <React.Fragment>
        <Modal
          open={true}
          scroll="body"
          onExited={() => router.push("/account")}
          children={<AccountSignupPage />}
        />
      </React.Fragment>
    );
  }
  return <pre>404 - Page Not Found</pre>;
};

export default AccountAction;

export function getStaticProps({ params: { accountAction } }) {
  return {
    props: {
      accountAction,
    },
  };
}

export const accountActions = ["login", "signup"];

export function getStaticPaths() {
  return {
    paths: accountActions.map((accountAction) => ({
      params: { accountAction: accountAction.toString() },
    })),
    fallback: true,
  };
}
