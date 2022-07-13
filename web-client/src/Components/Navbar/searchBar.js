import {
  Search as SearchIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Mic as MicIcon,
} from "@mui/icons-material";

//custom components
import Tooltip from "../Tooltip";

function backNavItems() {
  document.getElementById("search-content").style.display = "none";
  let itemsToHide = document.getElementsByClassName("nav-items");
  for (let i = 0; i < itemsToHide.length; i++) {
    itemsToHide[i].style.display = "inline-block";
  }
}

export const searchBar = (
  <div className="col" id="search-content">
    <div
      style={{
        paddingLeft: "15px",
        paddingRight: "15px",
        float: "left",
        visibility: "hidden",
      }}
      id="back-arrow"
      className="btn pt-1 pb-0"
      onClick={backNavItems}
    >
      <KeyboardBackspaceIcon />
    </div>
    <input
      type="text"
      style={{ fontSize: "14px" }}
      placeholder="Search for User, Team or Competition"
      name="search"
    ></input>
    <button type="submit">
      <SearchIcon />
    </button>
    <div
      style={{ paddingLeft: "15px", paddingRight: "15px", float: "right" }}
      className="microphone py-1"
    >
      <Tooltip title="Search by voice">
        <MicIcon />
      </Tooltip>
    </div>
  </div>
);
