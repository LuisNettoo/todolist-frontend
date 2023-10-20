import axios from "axios";

export const api = axios.create({
  baseURL: "https://todolist-backend-c9xy.onrender.com/api/v1"
})