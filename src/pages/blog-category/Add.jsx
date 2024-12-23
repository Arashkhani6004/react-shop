import Form from "../../components/blog-category/Form";
import Layout from "../../layouts/Layout";

function Add() {
  return (
    <Layout>
      <div className="shadow-md rounded-md p-3 mb-4 font-bold">
        <h1 className="text-xl">Add Blog Category</h1>
      </div>
      <Form editMode={false} />
      
    </Layout>
  );
}

export default Add;
