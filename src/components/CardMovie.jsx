import React from 'react'
import { Box, Card, Rating, CardMedia, CardContent, Typography } from "@mui/material";

function CardMovie({propsMovie}) {
    const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  return (
    <Card>
    <Box className="boxy">
      <Typography variant="h5"> Component Cardmovie</Typography>
    </Box>
    <Box className="Boxy" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <CardMedia component="img" image={`${baseUrlForMovie}${propsMovie.poster_path}`} alt="kucing" sx={{ width: 150 }}></CardMedia>
      <CardContent>
        <Typography variant="body1">{propsMovie.title}</Typography>
        <Rating value={propsMovie.vote_average / 2} precision={0.1} readOnly />
        <Typography variant="body1">{propsMovie.overview}</Typography>
      </CardContent>
    </Box>
  </Card>
  );
}

export default CardMovie