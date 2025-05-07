import { useNavigate } from "react-router";
import Layout from "./layouts/Layout";
import { useEffect } from "react";

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    if (!document.cookie) {
      navigate("/login");
    }
  }, []);

  return (
    <Layout>
      <div className="shadow-md rounded-md p-3 mb-4 font-bold flex justify-between items-center">
        <h1 className="text-xl">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-9">
        <div className="shadow-md border-b-4 border-neutral-950 rounded-md p-4">
          Products
        </div>
        <div className="shadow-md border-b-4 border-neutral-950 rounded-md p-4">
          Blogs
        </div>
        <div className="shadow-md border-b-4 border-neutral-950 rounded-md p-4">
          Blog Catgory
        </div>
        <div className="shadow-md border-b-4 border-neutral-950 rounded-md p-4">
          products Category
        </div>
      </div>
    </Layout>
  );
}

export default App;
