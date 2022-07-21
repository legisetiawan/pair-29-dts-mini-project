import React,{useEffect,useState} from 'react'
import tmdb from '../api/tmdb'
import {Typography,Box} from '@mui/material';
// Karena kita ingin menampilkan user, kita di sini cukup menggunakan useAuthState dan auth saja !
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";
import CardMovie from '../components/CardMovie';
const Home = () => { 
  // Di sini kita hanya perlu menggunakan user saja
  const [user] = useAuthState(auth);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariTMDB = await tmdb.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          "/movie/popular"
        );

        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);


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
        {movies.map((movie) => {
          return <CardMovie movie={movie}/>
        })}
      </Box>
    </>
  );
};
export default Home