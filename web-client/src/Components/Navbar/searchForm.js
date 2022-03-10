import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Mic as MicIcon,
} from "@material-ui/icons";
import { IconButton, Grid } from "@material-ui/core";

//custom components
import Tooltip from "../Tooltip";

function backNavItems() {
  document.getElementById("search-content").style.display = "none";
  let itemsToHide = document.getElementsByClassName("nav-items");
  for (let i = 0; i < itemsToHide.length; i++) {
    itemsToHide[i].style.display = "inline-block";
  }
}

export const SearchForm = () => {
  //search related
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return item;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  };

  return (
    <div id="search-content">
      <div className="row ms-lg-2">
        <div
          id="back-arrow"
          className="col btn pt-2"
          style={{
            visibility: "hidden !important",
          }}
          onClick={backNavItems}
        >
          <KeyboardBackspaceIcon />
        </div>
        <div className="col-9  col-lg-10 px-0 py-0">
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            styling={{}}
          />
        </div>
        <div
          className="col pt-2 microphone"
          style={{
            cursor: "pointer",
            justifyContent: "center",
            height: "100%",
            marginTop: "2px",
          }}
        >
          <Tooltip title="Search by voice">
            <MicIcon />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
