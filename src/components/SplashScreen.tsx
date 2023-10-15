import { Box } from "@mui/system";
import * as React from "react";

const splashScreen = {
  position: "fixed",
  zIndex: "100000",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
  background: "#fff",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
};

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const SplashScreen: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ ...splashScreen }}>
      <img alt="Logo" width="75%" src="./logo512.svg" />
      { children }
    </Box>
  );
};

export default SplashScreen;