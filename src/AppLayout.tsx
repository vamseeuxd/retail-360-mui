import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { mainListItems } from "./pages/dashboard/listItems";
import { SwipeableDrawer, Tooltip } from "@mui/material";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { FirebaseContext } from "./contexts/firebaseContext/firebaseContext";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

type Props = {
  changeTheme: () => void;
  children?: JSX.Element | JSX.Element[];
};

const AppLayout: React.FC<Props> = ({ children, changeTheme }) => {
  const [open, setOpen] = React.useState(false);
  const { signOut, firebaseUser } = React.useContext(FirebaseContext);
  const toggleDrawer = () => setOpen(!open);

  const renderSideMenu = () => {
    return (
      <SwipeableDrawer onClose={toggleDrawer} onOpen={toggleDrawer} open={open}>
        <List component="nav" style={{width:'250px'}}>{mainListItems}</List>
      </SwipeableDrawer>
    );
  };

  const renderAppTitle = () => {
    return (
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Dwarakamai Vizag
      </Typography>
    );
  };

  const renderSideToggleButton = () => {
    return (
      <>
        {!!firebaseUser && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ marginRight: "36px", ...(open && { display: "none" }) }}
          >
            {" "}
            <MenuIcon />{" "}
          </IconButton>
        )}
      </>
    );
  };

  const renderLogoutButton = () => {
    return (
      <>
        {firebaseUser && (
          <Tooltip title="Logout">
            <IconButton aria-label="logout" onClick={signOut}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        )}
      </>
    );
  };

  const renderToolBar = () => {
    return (
      <Toolbar sx={{ background: "#FFC107", boxShadow: 3 }}>
        {renderSideToggleButton()}
        {renderAppTitle()}
        <MaterialUISwitch onChange={changeTheme} />
        {renderLogoutButton()}
      </Toolbar>
    );
  };

  return (
    <>
      {renderSideMenu()}
      <Box
        component="main"
        sx={{ flexGrow: 1, overflow: "hidden", height: "calc(100vh - 0px)" }}
      >
        {renderToolBar()}
        <Box
          sx={{
            height: "calc(100vh - 65px)",
            margin: "0",
            overflow: "auto",
            padding: "0",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default AppLayout;
