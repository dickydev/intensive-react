import axios from "axios";

export const hitAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10_000,
});
