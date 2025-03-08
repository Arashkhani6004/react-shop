import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import api, { getBlogs } from "../../services/config";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Link, useNavigate, useParams, useSearchParams } from "react-router";

function ListBlog() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null);
  const [blogCategory, setBlogCategory] = useState([]);
  const [modal, setModal] = useState(false);
  const [searchParams , setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    page: 1,
    limit: null,
    category: null,
    title: "",
    sort: "",
    url: "",
  });
  // const [searchParams, setSearchParams] = useSearchParams({});
  // console.log(getBlogs(query));
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get(getBlogs(query));
        setData(res.blogs);
        setCount(res.count);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [query]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await api.get("blog-category");
      setBlogCategory(res.blogCategories);
    };
    getCategory();
  }, []);

  const deleteHandler = (id) => {
    const newBlogs = data.filter((item) => item._id !== id);
    setData(newBlogs);
    setCount((count) => count - 1);
    api.delete(`blog/${id}`, id);
    console.log("deleted Successfully");
  };

  let navigate = useNavigate();

  const searchHandler = (e) => {
    const title = e.target.value;
    setQuery((query) => ({ ...query, title }));
  };

  const filterHandler = async (category) => {
    setQuery((query) => ({ ...query, category }));
    setModal((modal) => !modal);
  };

  return (
    <Layout>
      <div className="shadow-md rounded-md p-3 mb-4 font-bold flex justify-between items-center">
        <h1 className="text-xl">Blogs</h1>
        <p className="m-0 block font-sm font-light">
          <span className="font-bold mr-1 font-md">{count}</span>Blogs
        </p>
      </div>
      <div className="flex justify-between items-center">
        <Link
          to="/blogs/add"
          className="block bg-stone-950 text-white rounded-xl px-6 mb-3 py-2 text-sm w-max hover:bg-orange-600 hover:text-white transition-all"
        >
          Add New Blog
        </Link>
        <button
          onClick={() => setModal((modal) => !modal)}
          className="bg-white border border-orange-500 rounded-xl px-6 mb-3 py-2 text-sm w-max hover:bg-orange-400 text-orange-500 hover:text-black transition-all"
        >
          Filter By Category
        </button>
        <div className="flex items-center">
          <input
            onChange={searchHandler}
            value={query.title}
            type="search"
            className="border border-slate-400 rounded-xl w-96 outline-0 px-3 py-1"
            placeholder="Search Titles..."
          />
        </div>
      </div>
      {modal && (
        <div
          className={`fixed inset-0 w-full h-full backdrop-blur-sm transition-all  flex justify-center items-center`}
        >
          <button
            className="absolute top-5 left-5 text-black text-2xl"
            onClick={() => setModal((modal) => !modal)}
          >
            X
          </button>
          <div className="w-96 bg-slate-100 shadow-md rounded-md p-4">
            <ul>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => filterHandler(null)}
              >
                All
              </li>
              {blogCategory.map((cat) => (
                <li
                  style={{ cursor: "pointer" }}
                  key={cat._id}
                  onClick={() => filterHandler(cat._id)}
                >
                  {cat.title}
                </li>
              ))}
              <li></li>
            </ul>
          </div>
        </div>
      )}
      <table className="w-full text-start border-collapse border border-slate-400">
        <thead className="bg-slate-100">
          <tr>
            <th className="border border-slate-400 p-2 text-start">Title</th>
            <th className="border border-slate-400 p-2 text-start">Url</th>
            <th className="border border-slate-400 p-2 text-start">Image</th>
            <th className="border border-slate-400 p-2 text-start">Category</th>
            <th className="border border-slate-400 p-2 text-start">Function</th>
          </tr>
        </thead>
        <tbody>
          {data.map((blog) => (
            <tr key={blog._id}>
              <td className="border border-slate-400 p-2 text-start">
                {blog.title}
              </td>
              <td className="border border-slate-400 p-2 text-start">
                {blog.url}
              </td>
              <td className="border border-slate-400 p-2 text-start">
                <img
                  src={`${import.meta.env.VITE_SERVER_URL_FILES}/blog/resized/${
                    blog.image
                  }`}
                  width="50"
                  height="50"
                />
              </td>
              <td className="border border-slate-400 p-2 text-start">
                {blog.category.title}
              </td>
              <td className="border border-slate-400 p-2 text-start">
                <div className="flex gap-5">
                  <button
                    className="px-3 py-1 border bg-orange-600 text-white hover:bg-white hover:text-orange-300 transition border-slate-200 rounded-md "
                    onClick={() => navigate(`/blogs/${blog._id}`)}
                  >
                    <EditOutlined />
                  </button>
                  <button
                    onClick={() => deleteHandler(blog._id)}
                    className="px-3 py-1 border bg-orange-600 text-white hover:bg-white hover:text-orange-300 transition border-slate-200 rounded-md "
                  >
                    <DeleteOutlined />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default ListBlog;
