export const ClubProfileTabs = [
  {
    label: "About",
    value: "1",
  },
  {
    label: "Posts",
    value: "2",
  },
  {
    label: "Events",
    value: "3",
  },
  {
    label: "Photos",
    value: "4",
  },
  {
    label: "Videos",
    value: "5",
  },
  {
    label: "Members",
    value: "6",
  },
  {
    label: "Teams",
    value: "7",
  },
  {
    label: "Competitions",
    value: "8",
  },
];

export const ClubProfileTabPanels = [
  {
    value: "1",
    component: <h4>General information about the Club</h4>,
  },
  {
    value: "2",
    component: (
      <h4>
        Posts posted by club / club admins or that the club / "team belonging to
        the club" were tagged in
      </h4>
    ),
  },
  {
    value: "3",
    component: (
      <h4>
        Events played, playing or going to be played by any of the team that
        belong to this club
      </h4>
    ),
  },
  {
    value: "4",
    component: (
      <h4>Photos added by the club or club admins tagging the club</h4>
    ),
  },
  {
    value: "5",
    component: (
      <h4>Videos added by the club or club admins tagging the club</h4>
    ),
  },
  {
    value: "6",
    component: <h4>Members of the club / club's teams including admins</h4>,
  },
  {
    value: "7",
    component: <h4>Teams belonging to the club</h4>,
  },
  {
    value: "8",
    component: (
      <h4>
        Competitions that teams of the club participated or are participating in
      </h4>
    ),
  },
];
