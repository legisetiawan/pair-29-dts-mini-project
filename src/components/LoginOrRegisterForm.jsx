import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Face from "@mui/icons-material/Face";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const theme = createTheme();
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    // Karena state berupa Object
    // dan state sifatnya immutable

    // maka untuk set statenya
    // menggunakan spread dan overwrite
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    console.log("Login");
    navigate("/");
  };

  const registerHandler = () => {
    console.log("Register");
    navigate("/login");
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };
  return (
    <ThemeProvider theme={theme} sx={{ bgcolor: "white" }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <Face />
          </Avatar>
          <Typography component="h1" variant="h5">
          {loginOrRegister === "login" ? "Login Page" : "Register Page"}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="email addres" name="email" autoComplete="email" autoFocus />
            <TextField margin="normal" required fullWidth id="password" label="password" type="password" name="password" autoComplete="curren-password" onChange={textFieldEmailOnChangeHandler} />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember Me" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {loginOrRegister === "login" ? "Login" : "Register Account"}
            </Button>

            <Grid container sx={{ display: "flex" }}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 20, mb: 2 }} /> */}
      </Container>
    </ThemeProvider>
  );
};

export default LoginOrRegisterForm;
