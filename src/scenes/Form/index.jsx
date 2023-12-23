import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Header from "../../components/Header";
import { object, string } from "yup";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

const userSchema = object({
  firstname: string().required("Firstname is required"),
  lastname: string().required("Lastname is required"),
  email: string().email("email is invalid").required("email is required"),
  phone: string().required("phone is required"),
});

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
};

const CreateProfile = () => {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: userSchema,
  });
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Create Profile" subTitle="Create new Profile" />
      </Box>

      <Box m="20px">
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{ p: 5, my: 5 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              sx={{
                width: "85%",
              }}
              container
              spacing={3}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="firstname"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                  color="secondary"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstname && Boolean(formik.errors.firstname)
                  }
                  helperText={
                    formik.touched.firstname && formik.errors.firstname
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="lastname"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                  color="secondary"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastname && Boolean(formik.errors.lastname)
                  }
                  helperText={formik.touched.lastname && formik.errors.lastname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  color="secondary"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="phone"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  color="secondary"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="address"
                  id="address"
                  name="address"
                  placeholder="Address"
                  color="secondary"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="city"
                  id="city"
                  name="city"
                  placeholder="City"
                  color="secondary"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="zipCode"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Zip Code"
                  color="secondary"
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.zipCode && Boolean(formik.errors.zipCode)
                  }
                  helperText={formik.touched.zipCode && formik.errors.zipCode}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="country"
                  id="country"
                  name="country"
                  placeholder="Country"
                  color="secondary"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="center" mt={5} gap={3}>
              <Button
                variant="outlined"
                type="submit"
                color="secondary"
                onClick={formik.handleReset}
              >
                Reset
              </Button>
              <Button variant="contained" type="submit" color="secondary">
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreateProfile;
