import { useEffect, useState } from "react";
import api, { getBlogCategory } from "../../services/config";
import Layout from "../../layouts/Layout";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

function Lsit() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null);
  const [page, setPage] = useState(1);

  let navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get(getBlogCategory(page, 10));
        setData(res.blogCategories);
        setCount(res.count);
      } catch (error) {
        (error) => console.log(error);
      }
    };
    getData();
  }, [page]);

  const deleteHandler = async (id) => {
    try {
      await api.delete(`blog-category/${id}`);
      const newBlogs = data.filter((item) => item._id !== id);
      setData(newBlogs);
      setCount((count) => count - 1);
    } catch (error) {
      (error) => console.log(error);
    }
  };
  console.log(data);
  const nextHandler = () => {
    setPage((page) => page + 1);
    // console.log(page);
  };
  const prevHandler = (page) => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  return (
    <Layout>
      <div className="shadow-md rounded-md p-3 mb-4 font-bold flex justify-between items-center">
        <h1 className="text-xl">Blog Categories</h1>
        <p className="m-0 block font-sm font-light">
          <span className="font-bold mr-1 font-md">{count}</span>Blog Categories
        </p>
      </div>
      <table className="w-full text-start border-collapse border border-slate-400">
        <thead className="bg-sky-100">
          <tr>
            <th colSpan={4} className="border border-slate-400 p-2 text-start">
              Title
            </th>
            <th colSpan={2} className="border border-slate-400 p-2 text-start">
              Url
            </th>
            <th className="border border-slate-400 p-2 text-start">Image</th>
            <th colSpan={1} className="border border-slate-400 p-2 text-start">
              Function
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((blogCat) => (
            <tr key={blogCat._id}>
              <td
                colSpan={4}
                className="border border-slate-400 p-2 text-start"
              >
                {blogCat.title}
              </td>
              <td
                colSpan={2}
                className="border border-slate-400 p-2 text-start"
              >
                {blogCat.url}
              </td>
              <td className="border border-slate-400 p-2 text-start">
                <img
                  src={`${
                    import.meta.env.VITE_SERVER_URL_FILES
                  }/blogCategory/resized/${blogCat.image}`}
                  width="50"
                  height="50"
                />
              </td>
              <td
                colSpan={1}
                className="border border-slate-400 p-2 text-start"
              >
                <div className="flex gap-5">
                  <button
                    className="px-3 py-1 border bg-sky-600 text-white hover:bg-white hover:text-sky-300 transition border-slate-200 rounded-md "
                    onClick={() => navigate(`/blog-category/${blogCat._id}`)}
                  >
                    <EditOutlined />
                  </button>
                  <button
                    onClick={() => deleteHandler(blogCat._id)}
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

      {count > 10 && (
        <div className="flex items-center gap-2">
          <button onClick={() => prevHandler(page)}>prev</button>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <button onClick={nextHandler}>next</button>
        </div>
      )}
    </Layout>
  );
}

export default Lsit;
