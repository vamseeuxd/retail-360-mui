import { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppLayout from "./AppLayout";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Home from "./pages/home/home";
import Apartments from "./pages/apartments/apartments";
import Wings from "./pages/wings/wings";
import Flats from "./pages/flats/flats";
import Members from "./pages/members/members";
import Owners from "./pages/owners/owners";
import Accounts from "./pages/accounts/accounts";
import Visitors from "./pages/visitors/visitors";
import Notices from "./pages/notices/notices";
import Events from "./pages/events/events";
import Rules from "./pages/rules/rules";
import Vehicles from "./pages/vehicles/vehicles";
import Staff from "./pages/staff/staff";
import Mynotifications from "./pages/mynotifications/mynotifications";
import Inventory from "./pages/inventory/inventory";
import Tenants from "./pages/tenants/tenants";
import Userprofile from "./pages/userprofile/userprofile";
import Login from "./pages/login/login";
import { FirebaseContextProvider } from "./contexts/firebaseContext/firebaseContext";
import PrivateRoutes from "./utils/PrivateRoutes";

// https://github.com/fireship-io/react-firebase-chat/blob/master/src/App.js

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#333333",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const changeTheme = (): void => {
    setIsDarkTheme(!isDarkTheme);
  };

  const renderRoutes = () => {
    return (
      <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/wings" element={<Wings />} />
            <Route path="/flats" element={<Flats />} />
            <Route path="/members" element={<Members />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/visitors" element={<Visitors />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/events" element={<Events />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/mynotifications" element={<Mynotifications />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/userprofile" element={<Userprofile />} />
          </Route>
        </Routes>
      </>
    );
  };

  // prettier-ignore
  return (
    <FirebaseContextProvider>
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          flexGrow: 1,
          overflow: "auto",
        }}
      >
      <Router>
        <AppLayout changeTheme={changeTheme}>
        {renderRoutes()}
        </AppLayout>
      </Router>
      </Box>
    </ThemeProvider>
    </FirebaseContextProvider>
  );
}

export default App;
