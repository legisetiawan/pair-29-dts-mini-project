import React from 'react'
import {Typography,Box} from '@mui/material';
// Karena kita ingin menampilkan user, kita di sini cukup menggunakan useAuthState dan auth saja !
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";

const Home = () => { 
  // Di sini kita hanya perlu menggunakan user saja
  const [user] = useAuthState(auth);

  return (
    <>
      <Box>
        <Typography variant="body1">Halo, ini adalah halaman utama</Typography>

        {/* Kita akan tampilkan email dari user di sini */}
        {user ? (
          <Typography variant="body1">
            Email - <strong>{user.email}</strong>, uid -{" "}
            <strong>{user.uid}</strong>
          </Typography>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};
export default Home