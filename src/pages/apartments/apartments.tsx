import * as React from "react";
import { PageHeading } from "../../components/pageHeading";
import { FirebaseContext } from "../../contexts/firebaseContext/firebaseContext";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  SpeedDial,
  SpeedDialIcon,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface PageProps {
  children?: React.ReactNode;
}

export default function Page(props: PageProps) {
  const { firebaseUser } = React.useContext(FirebaseContext);
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => setOpen(!open);
  return (
    <>
      <PageHeading>Apartments</PageHeading>
      <SpeedDial
        ariaLabel="Add New Apartment"
        color="red"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        onClick={toggleDrawer}
        FabProps={{
          sx: {
            bgcolor: "#FFC107",
            "&:hover": {
              bgcolor: "#FFC107",
            },
          },
        }}
        icon={<SpeedDialIcon openIcon={<AddIcon />} />}
      ></SpeedDial>
      <Drawer onClose={toggleDrawer} anchor={"bottom"} open={open}>
        <PageHeading>Add New Apartments</PageHeading>
        <Box autoComplete="off" component="form">
          <List>
            <ListItem alignItems="flex-start"><TextField sx={{width:'100%'}} size="small" required label="Aparment Name" variant="outlined" /></ListItem>
            <ListItem alignItems="flex-start"><TextField sx={{width:'100%'}} size="small" required label="Address Line 1" variant="outlined" /></ListItem>
            <ListItem alignItems="flex-start"><TextField sx={{width:'100%'}} size="small" label="Address Line 2" variant="outlined" /></ListItem>
            <ListItem alignItems="flex-start"><TextField sx={{width:'100%'}} size="small" required label="Country" variant="outlined" /></ListItem>
            <ListItem alignItems="flex-start"><TextField sx={{width:'100%'}} size="small" required label="State" variant="outlined" /></ListItem>
            <ListItem alignItems="flex-start"><TextField sx={{width:'100%'}} size="small" required label="City" variant="outlined" /></ListItem>
            <ListItem alignItems="flex-start"><TextField sx={{width:'100%'}} size="small" required label="Pincode" variant="outlined" /></ListItem>
            <ListItem alignItems="flex-start" style={{justifyContent: 'space-between'}}>
              <Button variant="contained" color="warning">Add</Button> 
              <Button variant="outlined" onClick={toggleDrawer} color="warning">Cancel</Button>
            </ListItem>
          </List>
        </Box>
        
        
        
      </Drawer>
    </>
  );
}
