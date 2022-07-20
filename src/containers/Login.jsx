import React from 'react'
import  Avatar  from '@mui/material/Avatar';    
import Typography from '@mui/material/Typography';
import  Button  from '@mui/material/Button';
import  CssBaseline  from '@mui/material/CssBaseline';
import  TextField from '@mui/material/TextField';
import  FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid  from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Face from '@mui/icons-material/Face';
import Container from '@mui/material/Container';
import { createTheme,ThemeProvider } from "@mui/material/styles";

const Login = () => {
    const theme = createTheme({
        palette:{
            main:"white"
        }
    });
  return (
    <>
    <ThemeProvider theme={theme} sx={{bgcolor:"white"}}>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box sx={{marginTop:8,display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Avatar sx={{m:1,bgcolor:'secondary.main'}}>
                    <Face/>
                </Avatar>
                <Typography component="h1" variant='h5'>
                    Sign In
                </Typography>
                <Box component="form" noValidate={{mt:1}}>
                    <TextField sx={{bgcolor:"white"}} margin="normal" required fullWidth id='email' label='email addres' name='email' autoComplete='email' autoFocus/>
                    <TextField sx={{bgcolor:"white"}} margin="normal" required fullWidth id='password' label='password' type='password' name='password' autoComplete='curren-password'/>
                    <FormControlLabel control={<Checkbox value='remember' color='primary'/>} label="Remember Me"/>

                </Box>

            </Box>
        </Container>

    </ThemeProvider>
    </>
  );
}

export default Login