import * as TournamentPages from "../pages/tournament";

export const TournamentProfilePage = {
  exact: true,
  path: "/tournaments/:tournamentID",
  component: TournamentPages.TournamentProfilePage,
};
