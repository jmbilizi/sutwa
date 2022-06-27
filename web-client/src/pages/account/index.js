import * as React from "react";
import dynamic from "next/dynamic";
const AccountHomePage = dynamic(() =>
  import("../../Components/Account/AccountHomePage")
);

export default function Home() {
  return <AccountHomePage />;
}
