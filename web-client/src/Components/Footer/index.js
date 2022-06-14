import * as React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";

const footer = [
  {
    name: "About",
    path: "#",
  },
  {
    name: "Terms of Service",
    path: "#",
  },
  {
    name: "Privacy Policy",
    path: "#",
  },
  {
    name: "Help Center",
    path: "#",
  },
  {
    name: "Cookie Policy",
    path: "#",
  },
  {
    name: "Ads info",
    path: "#",
  },
  {
    name: "Blog",
    path: "#",
  },
  {
    name: "Status",
    path: "#",
  },
  {
    name: "Brands Ressources",
    path: "#",
  },
  {
    name: "Advertising",
    path: "#",
  },
  {
    name: "Marketing",
    path: "#",
  },
  {
    name: "Sutwa for Business",
    path: "#",
  },
  {
    name: "Developers",
    path: "#",
  },
  {
    name: "Directory",
    path: "#",
  },
  {
    name: "Settings",
    path: "#",
  },
  {
    name: `© ${new Date().getFullYear()} Sutwa, Inc`,
    path: "#",
  },
];

function Footer() {
  return (
    <Grid
      style={{ fontSize: "13px" }}
      className={`justify-content-center bg-light fixed-bottom text-center py-3 footer`}
    >
      <div className="list-inline">
        {footer.map((element) => (
          <Link className="list-inline-item mx-2" href={element.path}>
            {element.name}
          </Link>
        ))}
      </div>
    </Grid>
  );
}

export default Footer;
