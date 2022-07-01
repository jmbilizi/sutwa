import * as React from "react";
import {
  AppBar,
  IconButton,
  // Button,
  Grid,
  Badge,
  SwipeableDrawer,
  //Drawer,
  Hidden,
} from "@mui/material";
import {
  Search as SearchIcon,
  Apps as AppsIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  MailOutline as MailOutlineIcon,
} from "@mui/icons-material";
import { makeStyles, useTheme } from "@mui/styles";

//custom components
import Tooltip from "../Tooltip";
import { searchBar } from "./searchBar";
import { drawerContent } from "./drawerContent";
import {
  AccountMenuContent,
  GeneralNotificationsMenuContent,
  MessageNotificationsMenuContent,
  SutwAppsMenuContent,
  CreateMenuContent,
} from "./menuContents";
import MenuIconAndLogo from "./menuIconAndLogo";
import Menu from "../Menu";

import { SearchForm } from "./searchForm";

/* open search*/
function openSearch() {
  let itemsToHide = document.getElementsByClassName("nav-items");
  for (let i = 0; i < itemsToHide.length; i++) {
    itemsToHide[i].style.display = "none";
  }
  document.getElementById("search-content").style.display = "inline-block";
  document.getElementById("search-content").style.width = "100%";
  document.getElementById("back-arrow").style.visibility = "visible";
}

export default function Navbar(props) {
  const drawerWidth = 240;

  const useStyles = makeStyles((themes) => ({
    menuButton: {
      marginLeft: themes.spacing(1),
      marginRight: themes.spacing(1),
    },
    logoButton: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    removeHover: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    sutwaLogo: {
      borderImage:
        "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
      borderImageSlice: 1,
      backgroundImage:
        "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
    },
    // necessary for content to be below app bar
    drawerPaper: {
      width: drawerWidth,
    },
  }));

  const { window } = props;
  const theme = useTheme();
  const classes = useStyles(theme);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //Menu related staff
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [menuContent, setMenuContent] = React.useState(null);

  const handleClick = (event, menuCont) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setMenuContent(menuCont);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <AppBar
        color="inherit"
        className="navbar py-0"
        style={{ position: "fixed" }}
      >
        <Grid className="container-fluid justify-content-between p-0">
          <MenuIconAndLogo handleDrawerToggle={handleDrawerToggle} />
          <SearchForm />
          <div className="right-side-nav-content my-1 px-2 nav-items">
            <li id="open-search">
              <IconButton
                edge="start"
                aria-label="open drawer"
                onClick={openSearch}
              >
                <SearchIcon />
              </IconButton>
            </li>
            <li>
              <Tooltip title="Create">
                <IconButton
                  color="inherit"
                  onClick={(event) => handleClick(event, <CreateMenuContent />)}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Messages">
                <IconButton
                  color="inherit"
                  onClick={(event) =>
                    handleClick(event, <MessageNotificationsMenuContent />)
                  }
                >
                  <Badge badgeContent={9} color="secondary">
                    <MailOutlineIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Notifications">
                <IconButton
                  color="inherit"
                  onClick={(event) =>
                    handleClick(event, <GeneralNotificationsMenuContent />)
                  }
                >
                  <Badge badgeContent={12} color="secondary">
                    <NotificationsNoneOutlinedIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Sutwa Apps">
                <IconButton
                  color="inherit"
                  onClick={(event) =>
                    handleClick(
                      event,
                      <SutwAppsMenuContent closeMenu={handleClose} />
                    )
                  }
                >
                  <AppsIcon />
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Account">
                <IconButton
                  color="inherit"
                  onClick={(event) =>
                    handleClick(
                      event,
                      <AccountMenuContent closeMenu={handleClose} />
                    )
                  }
                  size="small"
                >
                  <AccountCircleOutlinedIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </li>
          </div>
        </Grid>
      </AppBar>

      {/* Menu or dropdown menu */}
      <Menu anchorEl={anchorEl} width="350px" open={open} onClose={handleClose}>
        {menuContent}
      </Menu>

      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <SwipeableDrawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onOpen={() => null}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawerContent(
            <MenuIconAndLogo handleDrawerToggle={handleDrawerToggle} />
          )}
        </SwipeableDrawer>
      </Hidden>
    </React.Fragment>
  );
}
