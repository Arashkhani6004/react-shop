import { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import api, { getBlogCategory } from "../../services/config";
import ImageFile from "../../components/shared/ImageFile";
import { useNavigate } from "react-router";
import BlogForm from "../../components/blogs/BlogForm";

function AddBlog() {
  return (
    <Layout>
      <div className="shadow-md rounded-md p-3 mb-4 font-bold">
        <h1 className="text-xl">Add Blog</h1>
      </div>
      <BlogForm />
    </Layout>
  );
}

export default AddBlog;
