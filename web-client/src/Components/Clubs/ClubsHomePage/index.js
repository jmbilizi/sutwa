import * as React from "react";
import { List } from "@mui/material";
import Link from "next/link";
import { clubs } from "../../../../api/clubsData";

export function ClubsHomePage() {
  return (
    <React.Fragment>
      <h1 className="mt-5 pt-5">Clubs Database</h1>
      <List className="row">
        {clubs.map((club, index) => (
          <Link
            key={index}
            href={`/clubs/${club.id}`}
            className="col-12 text-center"
          >
            {club.name}
          </Link>
        ))}
      </List>
    </React.Fragment>
  );
}
