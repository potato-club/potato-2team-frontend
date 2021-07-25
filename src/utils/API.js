import axios from "axios";

const API = axios.create({
    baseURL: "gamsung-coding.shop/",
    headers:{
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  
export default API;  