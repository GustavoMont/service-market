import axios from "axios";
import getToken from "./token";

const token = getToken();

const api = axios.create({
  baseURL: "https://localhost:7242",
  headers: {
    Authorization: `Bearer ${token ? token.access : ""}`,
    "Content-Type": "application/json",
  },
});

export default api;
