import axios from "axios";
import { BASE_URL } from "../constant/axios";
export const http = axios.create({
  baseURL: BASE_URL,
});