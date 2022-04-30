import React from "react";
import {
  AppBar,
  IconButton,
  // Button,
  //Grid,
  Badge,
  SwipeableDrawer,
  //Drawer,
  Hidden,
} from "@material-ui/core";

import {
  //Menu as MenuIcon,
  Search as SearchIcon,
  Apps as AppsIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  MailOutline as MailOutlineIcon,
} from "@material-ui/icons";
// import { Helmet } from "react-helmet";

import "./style.css";
//custom components
import Tooltip from "../Tooltip";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { searchBar } from "./searchBar";
import { drawerContent } from "./drawerContent";
import {
  AccountMenuContent,
  GeneralNotificationsMenuContent,
  MessageNotificationsMenuContent,
  SutwAppsMenuContent,
  CreateMenuContent,
} from "./menuContents";
import { MenuIconAndLogo } from "./menuIconAndLogo";
import Menu from "../../Components/Menu";

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

const Navbar = (props) => {
  //material ui styles and classes

  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: "relative",
    },
    menuButton: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
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
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
  }));

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //Menu related staff
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [menuContent, setMenuContent] = React.useState(null);
  const handleClick = async (menuCont) => {
    await setMenuContent(menuCont);
    setAnchorEl(true);
  };
  const handleClose = async () => {
    setAnchorEl(null);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar color="inherit" position="fixed" className="navbar py-0">
        <div className="container-fluid p-0">
          <MenuIconAndLogo
            classes={classes}
            handleDrawerToggle={handleDrawerToggle}
          />
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
                  className={``}
                  color="inherit"
                  onClick={() => handleClick(<CreateMenuContent />)}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Messages">
                <IconButton
                  color="inherit"
                  onClick={() =>
                    handleClick(<MessageNotificationsMenuContent />)
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
                  onClick={() =>
                    handleClick(<GeneralNotificationsMenuContent />)
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
                  onClick={() => handleClick(<SutwAppsMenuContent />)}
                >
                  <AppsIcon />
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Account">
                <IconButton
                  color="inherit"
                  onClick={() =>
                    handleClick(<AccountMenuContent closeMenu={handleClose} />)
                  }
                  className="p-2"
                >
                  <AccountCircleOutlinedIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </li>
          </div>
        </div>
      </AppBar>

      {/* Menu or dropdown menu */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
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
            <MenuIconAndLogo
              classes={classes}
              handleDrawerToggle={handleDrawerToggle}
            />
          )}
        </SwipeableDrawer>
      </Hidden>
    </>
  );
};
export default Navbar;
