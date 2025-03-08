import { useEffect, useState } from "react";
import ImageFile from "../shared/ImageFile";
import api from "../../services/config";
import { useNavigate } from "react-router";

function Form({ editMode, id }) {
  const [currentBlog, setCurrentBlog] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    if (editMode && id) {
      const getCurrentBlog = async (id) => {
        try {
          const res = await api.get(`/blog-category/${id}`);
          setCurrentBlog(res);
          setFormData({ ...formData, ...res });
        } catch (error) {
          console.log(error);
        }
      };
      getCurrentBlog(id);
    }
  }, [editMode && id]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  const navigate = useNavigate();
  const submitHandler = async (editMode) => {
    if (editMode) {
      const changes = {};
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== currentBlog[key]) {
          changes[key] = formData[key];
        }
      });
      await api
        .patch(`/blog-category/${id}`, changes)
        .then((res) => console.log(res));
    } else {
      const res = await api.post("blog-category", formData);
      if (res.error) {
        alert(res.message);
        return;
      }
    }
    navigate("/blog-category");
  };
console.log(formData)
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="">
        <label className="block font-bold text-md mb-1">Title</label>
        <input
          className="py-2 w-full px-3 border-slate-400	text-sm rounded-xl border focus:outline-none focus:border-stone-800 transition"
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
          className="py-2 w-full px-3 border-slate-400	text-sm rounded-xl border focus:outline-none focus:border-stone-800 transition"
          placeholder="Url"
          type="text"
          name="url"
          value={formData.url}
          onChange={changeHandler}
        />
      </div>
      <div className="col-span-2">
        <ImageFile
          setFile={setFormData}
          formData={formData}
          folder="blogCategory"
        />
      </div>
      <div className="col-span-2">
        <label className="block font-bold text-md mb-1">Description</label>
        <textarea
          name="content"
          placeholder="Content"
          onChange={changeHandler}
          value={formData.content}
          className="w-full py-2 w-full px-3 border-slate-400	text-sm rounded-xl border focus:outline-none focus:border-stone-800 transition h-56"
        ></textarea>
      </div>
      <div>
        <button
          onClick={() => submitHandler(editMode)}
          className="px-20 py-2 bg-stone-950 text-white rounded-xl border border-stone-300 hover:bg-stone-300 hover:text-black transition hover:border-stone-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
