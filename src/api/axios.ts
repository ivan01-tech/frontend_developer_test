import axios from "axios";
import { baseUrl } from "../utils/constants";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
