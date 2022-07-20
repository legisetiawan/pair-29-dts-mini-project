import React, { useState,  useEffect } from "react";
import Box from "@mui/material/Box";
import tmdb from "../api/tmdb";
import CardMovie from "../components/CardMovie";
import Typography from "@mui/material/Typography";
import Home from "./Home";

const DetailFilm = () => {
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
    <Home/>
      <Box sx={{padding:"1em",margin:"1em 0em",border:"1px dashed grey"}}>
        <Typography variant="h5" align="center" sx={{mt:5,mb:5}}>List Movies Populer TMDB</Typography>

        {movies.map((movie) => {
          return <CardMovie movie={movie} />;
        })}
      </Box>
    </>
  );
};

export default DetailFilm;
