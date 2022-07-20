import React,{useState,useEffect} from 'react'
import { Box,Rating } from '@mui/material';
import Card from '@mui/material/Card';
import tmdbInstance from '../api/tmdb';
import CardMovie from '../components/CardMovie';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const DetailFilm = () => {
    const [movies,setMovies] = useState([]);
    
  return (
    <>
    <Card>
        <Box className="boxy">
          <Typography variant="h5"> Movie</Typography>
        </Box>
        <Box className="Boxy" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <CardMedia component="img"  alt="kucing" sx={{ width: 150 }}></CardMedia>
          <CardContent>
            <Typography variant="body1"></Typography>
            <Rating precision={0.1} readOnly />
            <Typography variant="body1"></Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}

export default DetailFilm