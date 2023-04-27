import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://spring-boot-api-production-1bb1.up.railway.app/api/v1",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    timeout: 5000,
});

export default api;
