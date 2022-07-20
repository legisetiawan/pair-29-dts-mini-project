import axios from "axios";
const tmdbInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"api_key",
    },
});
export default tmdbInstance;
