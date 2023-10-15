import * as React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { FirebaseContext } from "../../contexts/firebaseContext/firebaseContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

interface PageProps {
  children?: React.ReactNode;
}

export default function Page(props: PageProps) {
  const { signInWithGoogle, firebaseUser } = React.useContext(FirebaseContext);
  const navigate = useNavigate();
  const location = useLocation();
  const googleSignIn = async () => {
    await signInWithGoogle();
  };
  React.useEffect(() => {
    if (firebaseUser) {
      if (location?.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("../home");
      }
    }
  }, [firebaseUser, location.state.from, navigate]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 65px)",
      }}
    >
      <Button color="error" variant="contained" onClick={googleSignIn}>
        <GoogleIcon style={{ marginRight: "10px" }} />
        Sign In With Google
      </Button>
    </div>
  );
}
