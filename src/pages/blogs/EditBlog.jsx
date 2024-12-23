import { useParams } from "react-router";
import BlogForm from "../../components/blogs/BlogForm";
import Layout from "../../layouts/Layout";

function EditBlog() {
  const { id } = useParams();
  return (
    <Layout>
      <div className="shadow-md rounded-md p-3 mb-4 font-bold">
        <h1 className="text-xl">Edit Blog</h1>
      </div>
      <BlogForm editMode={true} id={id} />
    </Layout>
  );
}

export default EditBlog;
