import axios from "axios";

import { BASE_URL } from "../config";

const axiosInstance = axios.create({baseURL: BASE_URL});

axios.interceptors.response.use((res) => res, (err) => Promise.reject(
    (err.response && err.response.data) 
    || "something went wrong"));

 export default axiosInstance;