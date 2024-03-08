import axios from 'axios';

const PruebaApi=axios.create({
    baseURL:'http://localhost:3000/api'
})

PruebaApi.defaults.withCredentials=true;

export default PruebaApi;