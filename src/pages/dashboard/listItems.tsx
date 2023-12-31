import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
import ChecklistIcon from "@mui/icons-material/Checklist";
import GroupRemoveIcon from "@mui/icons-material/GroupRemove";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GavelIcon from "@mui/icons-material/Gavel";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import BadgeIcon from "@mui/icons-material/Badge";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const SideListItemButton = styled(ListItemButton)(({ theme }) => ({
  paddingTop: "0.125rem",
  paddingBottom: "0.125rem",
  borderBottom: theme.palette.mode === "dark" ? "1px solid #585858" : "1px solid #d7d7d7",
  "& .MuiListItemIcon-root ": {
    minWidth: "30px",
  },
}));

// prettier-ignore
export const mainListItems = (
  <React.Fragment>
    <Link to="/home"><SideListItemButton className="menu-button"> <ListItemIcon> <DashboardIcon /> </ListItemIcon> <ListItemText primary="Dashboard"/></SideListItemButton></Link>
    <Link to="/apartments"><SideListItemButton className="menu-button"> <ListItemIcon> <LocationCityIcon /> </ListItemIcon> <ListItemText primary="Apartments"/></SideListItemButton></Link>
    <Link to="/wings"><SideListItemButton className="menu-button"> <ListItemIcon> <DomainAddIcon /> </ListItemIcon> <ListItemText primary="Wings"/></SideListItemButton></Link>
    <Link to="/flats"><SideListItemButton className="menu-button"> <ListItemIcon> <EmojiTransportationIcon /> </ListItemIcon> <ListItemText primary="Flats"/></SideListItemButton></Link>
    <Link to="/members"><SideListItemButton className="menu-button"> <ListItemIcon> <GroupIcon /> </ListItemIcon> <ListItemText primary="Members"/></SideListItemButton></Link>
    <Link to="/owners"><SideListItemButton className="menu-button"> <ListItemIcon> <GroupAddIcon /> </ListItemIcon> <ListItemText primary="Owners"/></SideListItemButton></Link>
    <Link to="/accounts"><SideListItemButton className="menu-button"> <ListItemIcon> <ChecklistIcon /> </ListItemIcon> <ListItemText primary="Accounts"/></SideListItemButton></Link>
    <Link to="/visitors"><SideListItemButton className="menu-button"> <ListItemIcon> <GroupRemoveIcon /> </ListItemIcon> <ListItemText primary="Visitors"/></SideListItemButton></Link>
    <Link to="/notices"><SideListItemButton className="menu-button"> <ListItemIcon> <MarkEmailUnreadIcon /> </ListItemIcon> <ListItemText primary="Notices"/></SideListItemButton></Link>
    <Link to="/events"><SideListItemButton className="menu-button"> <ListItemIcon> <EventAvailableIcon /> </ListItemIcon> <ListItemText primary="Events"/></SideListItemButton></Link>
    <Link to="/rules"><SideListItemButton className="menu-button"> <ListItemIcon> <GavelIcon /> </ListItemIcon> <ListItemText primary="Rules"/></SideListItemButton></Link>
    <Link to="/vehicles"><SideListItemButton className="menu-button"> <ListItemIcon> <NoCrashIcon /> </ListItemIcon> <ListItemText primary="Vehicles"/></SideListItemButton></Link>
    <Link to="/staff"><SideListItemButton className="menu-button"> <ListItemIcon> <BadgeIcon /> </ListItemIcon> <ListItemText primary="Staff"/></SideListItemButton></Link>
    <Link to="/mynotifications"><SideListItemButton className="menu-button"> <ListItemIcon> <ReportProblemIcon /> </ListItemIcon> <ListItemText primary="My Notifications"/></SideListItemButton></Link>
    <Link to="/inventory"><SideListItemButton className="menu-button"> <ListItemIcon> <InventoryIcon /> </ListItemIcon> <ListItemText primary="Inventory"/></SideListItemButton></Link>
    <Link to="/tenants"><SideListItemButton className="menu-button"> <ListItemIcon> <PeopleOutlineIcon /> </ListItemIcon> <ListItemText primary="Tenants"/></SideListItemButton></Link>
    <Link to="/userprofile"><SideListItemButton className="menu-button"> <ListItemIcon> <ContactEmergencyIcon /> </ListItemIcon> <ListItemText primary="User Profile"/></SideListItemButton></Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
