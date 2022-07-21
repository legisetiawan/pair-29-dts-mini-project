import React, { useEffect, useState } from "react";

import { Box, Button, TextField, Typography,Avatar,CssBaseline,Container } from "@mui/material";
import Face from '@mui/icons-material/Face'
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { auth, loginDenganEmailDanPassword, registerDenganEmailDanPassword } from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
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
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };
  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  return (
    <Container maxWidth="xs">
      <CssBaseline/>
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }} component="form" noValidate>

      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <Face />
          </Avatar>
        <Typography variant="body1">{loginOrRegister === "login" ? "Sign In" : "Register"}</Typography>

        <TextField name="Email" type="email" variant="outlined" margin="normal" required fullWidth label="Email Address" value={credential.email} onChange={textFieldEmailOnChangeHandler} autoComplete="email" />

        <TextField name="Password" type="Password" variant="outlined" margin="normal" required fullWidth label="Password" value={credential.password} onChange={textFieldPasswordOnChangeHandler} autoComplete="current-password" />

        <Button variant="contained" fullWidth sx={{ mt: 3, mb: 2 }} onClick={buttonLoginOrRegisterOnClickHandler}>
          {loginOrRegister === "login" ? "Login" : "Register Account"}
        </Button>

        {loginOrRegister === "login" ? (
          <Link to="/register">
            <Typography variant="body1">Or do You Want Register ?</Typography>
          </Link>
        ) : (
          <Link to="/login">
            <Typography variant="body1">or do you want Login ?</Typography>
          </Link>
        )}
      </Box>
    </Container>
  );
};

export default LoginOrRegisterForm;
