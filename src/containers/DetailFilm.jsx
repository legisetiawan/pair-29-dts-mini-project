import React, { useState, useEffect } from "react";
import { Box, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import tmdb from "../api/tmdb";
import CardMovie from "../components/CardMovie";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const DetailFilm = () => {
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
        <Typography variant="h5">List Movies Populer TMDB</Typography>

        {movies.map((movie) => {
          return <CardMovie movie={movie} />;
        })}
      </Box>
    </>
  );
};

export default DetailFilm;
