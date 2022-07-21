import React,{useEffect,useState} from 'react'
import tmdb from '../api/tmdb'
import {Typography,Box} from '@mui/material';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";
import CardMovie from '../components/CardMovie';
const Home = () => { 
  const [user] = useAuthState(auth);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await tmdb.get(
          "/movie/popular"
        );
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