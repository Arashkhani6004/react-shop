import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:3000" });

api.interceptors.response.use(
  (res) => res.data,
  (err) => alert(err.response.data.message)
);

const getBlogCategory = (page, limit) => `/blog-category?page=${page}&limit=${limit}`;
const getBlogs = (page, limit) => `/blog?page=${page}&limit=${limit}`;

export default api;
export { getBlogCategory,getBlogs };
