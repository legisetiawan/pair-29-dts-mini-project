import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

// Import fungsi untuk melakukan Logout
import { keluarDariApps } from "../authentication/firebase";

const Navbar = () => {
  const navigate = useNavigate();

  // Fungsi ini akan menjadi async await
  // Karena keluarDariApps bersifat async, dan kita harus menunggu
  // keluarDariAppsSelesai, baru boleh navigate
  const buttonLogoutOnClickHandler = async () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    await keluarDariApps();
    navigate("/login");
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Belajar Firebase Authentication
          </Typography>
          <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar