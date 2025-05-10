import axios from "axios";
import { getToken } from "../cookie/token";
import { jwtDecode } from "jwt-decode";

const api = axios.create({ baseURL: "http://localhost:3000" });

api.interceptors.response.use((res) => res.data);

api.interceptors.request.use((request) => {
  const accessToken = getToken("token");
  if (accessToken) {
    request.headers["Authorization"] = `bearer ${accessToken}`;
  }
  return request;
});


const getBlogCategory = (page, limit) =>
  `/blog-category?page=${page}&limit=${limit}`;
const getBlogs = (query) => {
  const { page, limit, category, title, sort, url } = query;
  // console.log({ page, limit, category, title, sort, url });
  return `/blog${page ? `?page=${page}` : ""}${limit ? `&limit=${limit}` : ""}${
    title ? `&title=${title}` : ""
  }${category ? `&category=${category}` : ""}`;
};

export default api;
export { getBlogCategory, getBlogs };
