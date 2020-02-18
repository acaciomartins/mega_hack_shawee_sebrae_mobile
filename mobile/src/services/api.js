import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mega-hack.herokuapp.com'
});

//exp://4s-qdf.anonymous.mobile.exp.direct:80
//exp://192.168.0.52:19000
export default api;