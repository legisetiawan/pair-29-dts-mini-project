import axios from "axios";
const tmdbInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"ab7237785cf23a0506b6a556bda68e60"
    },
});
export default tmdbInstance;