import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:3000" });

api.interceptors.response.use(
  (res) => res.data,
  (err) => console.log(err)
);
// api.interceptors.request.use((res) => console.log(res));

const getBlogCategory = (page, limit) =>
  `/blog-category?page=${page}&limit=${limit}`;
const getBlogs = (query) => {
  const { page, limit, category, title, sort, url } = query;
  console.log({ page, limit, category, title, sort, url });
  return `/blog${page ? `?page=${page}` : ""}${limit ? `&limit=${limit}` : ""}`;
};

export default api;
export { getBlogCategory, getBlogs };
