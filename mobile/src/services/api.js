import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

//exp://4s-qdf.anonymous.mobile.exp.direct:80
//exp://192.168.0.52:19000
export default api;