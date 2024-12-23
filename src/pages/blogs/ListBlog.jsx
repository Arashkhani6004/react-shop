import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import api, { getBlogs } from "../../services/config";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

function ListBlog() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await api.get(getBlogs(1, 1000));
      setData(res.blogs);
      setCount(res.count);
    };
    getData();
  }, []);

  const deleteHandler = (id) => {
    const newBlogs = data.filter((item) => item._id !== id);
    setData(newBlogs);
    api.delete(`blog/${id}`, id);
    console.log("deleted Successfully");
  };
  let navigate = useNavigate();
  return (
    <Layout>
      <div className="shadow-md rounded-md p-3 mb-4 font-bold flex justify-between items-center">
        <h1 className="text-xl">Blogs</h1>
        <p className="m-0 block font-sm font-light">
          <span className="font-bold mr-1 font-md">{count}</span>Blogs
        </p>
      </div>
      <table className="w-full text-start border-collapse border border-slate-400">
        <thead className="bg-sky-100">
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
                    className="px-3 py-1 border bg-sky-600 text-white hover:bg-white hover:text-sky-300 transition border-slate-200 rounded-md "
                    onClick={() => navigate(`/blogs/${blog._id}`)}
                  >
                    <EditOutlined />
                  </button>
                  <button
                    onClick={() => deleteHandler(blog._id)}
                    className="px-3 py-1 border bg-sky-600 text-white hover:bg-white hover:text-sky-300 transition border-slate-200 rounded-md "
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
