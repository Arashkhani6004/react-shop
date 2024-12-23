import { useParams } from "react-router";
import Layout from "../../layouts/Layout";
import { useEffect, useState } from "react";
import api from "../../services/config";
import Form from "../../components/blog-category/Form";

function Edit() {
  const { id } = useParams();

  return (
    <Layout>
      <div className="shadow-md rounded-md p-3 mb-4 font-bold">
        <h1 className="text-xl">Edit Blog Category</h1>
      </div>
      <Form editMode={true} id={id} />
    </Layout>
  );
}

export default Edit;
