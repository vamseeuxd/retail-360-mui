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
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface PageProps {
  children?: React.ReactNode;
}

export default function Page(props: PageProps) {
  const { firebaseUser } = React.useContext(FirebaseContext);
  const [name, setName] = React.useState("");
  const [addressLine1, setAddressLine1] = React.useState("");
  const [addressLine2, setAddressLine2] = React.useState("");
  const [country, setCountry] = React.useState("India");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [pincode, setPincode] = React.useState("");

  const [nameError, setNameError] = React.useState("");
  const [addressLine1Error, setAddressLine1Error] = React.useState("");
  const [addressLine2Error, setAddressLine2Error] = React.useState("");
  const [countryError, setCountryError] = React.useState("");
  const [stateError, setStateError] = React.useState("");
  const [cityError, setCityError] = React.useState("");
  const [pincodeError, setPincodeError] = React.useState("");

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => setOpen(!open);

  const nameChange = (evt: any) => {
    setName(evt.target.value);
    setNameError(
      evt.target.validity.valid ? "" : "Please provide Valid Apartment Name."
    );
  };
  const addressLine1Change = (evt: any) => {
    setAddressLine1(evt.target.value);
    setAddressLine1Error(
      evt.target.validity.valid ? "" : "Please provide Valid Address Line 1."
    );
  };
  const addressLine2Change = (evt: any) => {
    setAddressLine2(evt.target.value);
    setAddressLine2Error(
      evt.target.validity.valid ? "" : "Please provide Valid Address Line 2."
    );
  };
  const countryChange = (evt: any) => {
    setCountry(evt.target.value);
    setCountryError(
      evt.target.value ? "" : "Please Select Country."
    );
  };
  const stateChange = (evt: any) => {
    setState(evt.target.value);
    setStateError(
      evt.target.validity.valid ? "" : "Please provide Valid State."
    );
  };
  const cityChange = (evt: any) => {
    setCity(evt.target.value);
    setCityError(evt.target.validity.valid ? "" : "Please provide Valid City.");
  };
  const pincodeChange = (evt: any) => {
    setPincode(evt.target.value);
    setPincodeError(
      evt.target.validity.valid ? "" : "Please provide Valid Pincode."
    );
  };

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

      {/* prettier-ignore */}
      <Drawer onClose={toggleDrawer} anchor={"bottom"} open={open} style={{maxWidth:'300px'}} PaperProps={{ sx: { maxWidth: "350px", margin:'0 auto' }, }}>
        <PageHeading>Add New Apartments</PageHeading>
        <Box autoComplete="off" component="form">
          <List>
            <ListItem alignItems="flex-start"><FormControl variant="outlined" error={!!nameError} sx={{width:'100%'}}><TextField size="small" error={!!nameError} onChange={nameChange} value={name} required label="Aparment Name" /> <FormHelperText id="my-helper-text">{nameError}</FormHelperText></FormControl></ListItem>
            <ListItem alignItems="flex-start"><FormControl variant="outlined" error={!!addressLine1Error} sx={{width:'100%'}}><TextField size="small" error={!!addressLine1Error} onChange={addressLine1Change} value={addressLine1} required label="Address Line 1" /> <FormHelperText id="my-helper-text">{addressLine1Error}</FormHelperText></FormControl></ListItem>
            <ListItem alignItems="flex-start"><FormControl variant="outlined" error={!!addressLine2Error} sx={{width:'100%'}}><TextField size="small" error={!!addressLine2Error} onChange={addressLine2Change} value={addressLine2} label="Address Line 2" /> <FormHelperText id="my-helper-text">{addressLine2Error}</FormHelperText></FormControl></ListItem>
            <ListItem alignItems="flex-start"> <FormControl variant="outlined" error={!!countryError} sx={{width:'100%'}}> <InputLabel>Country</InputLabel> <Select value={country} onChange={countryChange} label="Age" error={!!countryError} required> <MenuItem value="India">India</MenuItem> <MenuItem value="USA">USA</MenuItem> <MenuItem value="China">China</MenuItem> </Select> <FormHelperText id="my-helper-text">{countryError}</FormHelperText> </FormControl> </ListItem>
            <ListItem alignItems="flex-start"><FormControl variant="outlined" error={!!stateError} sx={{width:'100%'}}><TextField size="small" error={!!stateError} onChange={stateChange} value={state} required label="State" /> <FormHelperText id="my-helper-text">{stateError}</FormHelperText></FormControl></ListItem>
            <ListItem alignItems="flex-start"><FormControl variant="outlined" error={!!cityError} sx={{width:'100%'}}><TextField size="small" error={!!cityError} onChange={cityChange} value={city} required label="City" /> <FormHelperText id="my-helper-text">{cityError}</FormHelperText></FormControl></ListItem>
            <ListItem alignItems="flex-start"><FormControl variant="outlined" error={!!pincodeError} sx={{width:'100%'}}><TextField size="small" error={!!pincodeError} onChange={pincodeChange} value={pincode} required label="Pincode" /> <FormHelperText id="my-helper-text">{pincodeError}</FormHelperText></FormControl></ListItem>
            <ListItem alignItems="flex-start" style={{justifyContent: 'space-between'}}> <Button variant="contained" color="warning">Add</Button> <Button variant="outlined" onClick={toggleDrawer} color="warning">Cancel</Button> </ListItem>
          </List>
        </Box>
        
        
        
      </Drawer>
    </>
  );
}
