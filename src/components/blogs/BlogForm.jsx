import { useEffect, useState } from "react";
import api, { getBlogCategory } from "../../services/config";
import { useNavigate } from "react-router";
import ImageFile from "../shared/ImageFile";

function BlogForm({ editMode, id }) {
  const [blog, setBlog] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    content: "",
    category: "",
    image: "",
  });
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const res = await api.get(getBlogCategory(1, 1000));
      setCategory(res.blogCategories);
    };
    getCategory();
    if (editMode && id) {
      const getBlog = async (id) => {
        const currentBlog = await api.get(`/blog/${id}`);
        setBlog(currentBlog);
        setFormData((formData) => ({ ...formData, ...currentBlog }));
      };
      getBlog(id);
    }
  }, []);
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  let navigate = useNavigate();
  const submitHandler = async (editMode) => {
    if (editMode) {
      const changes = {};
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== blog[key]) {
          changes[key] = formData[key];
        }
      });
      await api.patch(`/blog/${id}`, changes).then(console.log("blog Edited"));
    } else {
      try {
        const res = await api.post("blog", formData);
        if (res.error) {
          alert(res.error);
          return;
        }
        console.log("Blog Submit successfully");
      } catch (error) {
        alert(error);
      }
    }
    navigate("/blogs");
  };
  return (
    <div className="grid grid-cols-3 gap-8 mx-10">
      <div className="">
        <label className="block font-bold text-md mb-1">Title</label>
        <input
          className="py-2 w-full px-3 border-slate-400	text-sm rounded-xl border focus:outline-none focus:border-sky-400 transition"
          placeholder="Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={changeHandler}
        />
      </div>
      <div className="">
        <label className="block font-bold text-md mb-1">Url</label>
        <input
          className="py-2 w-full px-3 border-slate-400	text-sm rounded-xl border focus:outline-none focus:border-sky-400 transition"
          placeholder="Url"
          type="text"
          name="url"
          value={formData.url}
          onChange={changeHandler}
        />
      </div>
      <div className="">
        <label className="block font-bold text-md mb-1">Category</label>
        <select
          className="py-2 w-full px-3 border-slate-400	text-sm rounded-xl border focus:outline-none focus:border-sky-400 transition"
          value={
            formData.category._id ? formData.category._id : formData.category
          }
          name="category"
          onChange={changeHandler}
        >
          {category.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-2">
        <ImageFile setFile={setFormData} formData={formData} folder="blog" />
      </div>
      <div className="col-span-3">
        <label className="block font-bold text-md mb-1">Description</label>
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={changeHandler}
          className="w-full py-2 w-full px-3 border-slate-400	text-sm rounded-xl border focus:outline-none focus:border-sky-400 transition h-56"
        ></textarea>
      </div>
      <div>
        <button
          onClick={() => submitHandler(editMode)}
          className="px-20 py-2 bg-sky-300 text-black rounded-xl border border-sky-300 hover:bg-white transition hover:border-sky-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default BlogForm;
