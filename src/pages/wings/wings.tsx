import * as React from "react";
import { PageHeading } from "../../components/pageHeading";
import { useForm } from "react-hook-form";
import { TextField, Button, Stack, Autocomplete } from "@mui/material";
import { DevTool } from "@hookform/devtools";
import { Box } from "@mui/system";
import { City, Country, State } from "country-state-city";

interface PageProps {
  children?: React.ReactNode;
}

type ApartmentForm = {
  name: string;
  addressLine1: string;
  addressLine2: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
};

export default function Page(props: PageProps) {
  // prettier-ignore
  const { handleSubmit, register, formState: { errors }, control, reset, setValue, watch } = useForm<ApartmentForm>({ defaultValues: { name: "", addressLine1: "", addressLine2: "", country: "", state: "", city: "", pincode: "", }, });
  const countries = Country.getAllCountries().map((country) => country.name);
  const onSubmit = (data: ApartmentForm) => {
    console.log(data);
  };
  const [states, setStates] = React.useState<string[]>([]);
  const [cities, setCities] = React.useState<string[]>([]);

  // prettier-ignore
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      switch (name) {
        case "country":
          const countryCode = Country.getAllCountries().find( (c) => c.name === value[name] );
          const stateData = State.getStatesOfCountry( countryCode?.isoCode || "" ).map((state) => state.name);
          setStates(stateData);
          break;
        case "state":
          const stateCode = State.getAllStates().find( (c) => c.name === value[name] );
          const cityData = City.getCitiesOfState( stateCode?.countryCode || "", stateCode?.isoCode || "" ).map((city) => city.name);
          console.log(cityData);
          setCities(cityData);
          break;
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // prettier-ignore
  return (
    <>
      <PageHeading>Wings</PageHeading>;
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
        <Stack spacing={2} padding="0 20px">
          <TextField size="small" label="Name" type="text" {...register("name", { required: "Name is required" })} error={!!errors.name} helperText={errors.name?.message} />
          <TextField size="small" label="Address Line 1" type="text" {...register("addressLine1", { required: "Address Line 1 is required" })} error={!!errors.addressLine1} helperText={errors.addressLine1?.message} />
          <TextField size="small" label="Address Line 2" type="text" {...register("addressLine2", { required: "Address Line 2 is required" })} error={!!errors.addressLine2} helperText={errors.addressLine2?.message} />
          <Autocomplete isOptionEqualToValue={(option, value) => option === value} onChange={(event, country) => setValue('country', country || '')} options={countries} getOptionLabel={(country) => country} renderInput={(params) => <TextField {...params} size="small" label="Country" type="text" {...register("country", { required: "Country is required" })} error={!!errors.country} helperText={errors.country?.message} />} />
          <Autocomplete isOptionEqualToValue={(option, value) => option === value} onChange={(event, state) => setValue('state', state || '')} options={states} getOptionLabel={(state) => state} renderInput={(params) => <TextField {...params} size="small" label="States" type="text" {...register("state", { required: "states is required" })} error={!!errors.state} helperText={errors.state?.message} />} />
          <Autocomplete isOptionEqualToValue={(option, value) => option === value} onChange={(event, city) => setValue('city', city || '')} options={cities} getOptionLabel={(city) => city} renderInput={(params) => <TextField {...params} size="small" label="City" type="text" {...register("city", { required: "citys is required" })} error={!!errors.city} helperText={errors.city?.message} />} />
          <TextField size="small" label="Pincode" type="number" {...register("pincode", { required: "Pincode is required" })} error={!!errors.pincode} helperText={errors.pincode?.message} />
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Button type="submit" variant="outlined" color="primary"> Login </Button>
            <Button type="button" variant="outlined" onClick={()=>reset({})} color="warning"> Cancel </Button>
          </Box>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
}
