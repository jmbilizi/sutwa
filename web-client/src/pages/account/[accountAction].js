import * as React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("../../Components/Modal"));
const AccountLoginPage = dynamic(() =>
  import("../../Components/Account/AccountLoginPage")
);
const AccountSignupPage = dynamic(() =>
  import("../../Components/Account/AccountSignupPage")
);

const AccountAction = ({ accountAction }) => {
  const router = useRouter();
  if (accountAction === "login") {
    return (
      <React.Fragment>
        <Modal
          open={true}
          scroll="body"
          onExited={() => router.back()}
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
          onExited={() => router.back()}
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
