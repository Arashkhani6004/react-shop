import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Add from "./pages/blog-category/Add.jsx";
import Lsit from "./pages/blog-category/Lsit.jsx";
import Edit from "./pages/blog-category/Edit.jsx";
import AddBlog from "./pages/blogs/AddBlog.jsx";
import EditBlog from "./pages/blogs/EditBlog.jsx";
import ListBlog from "./pages/blogs/ListBlog.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
     
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/blog-category/add" element={<Add />} />
      <Route path="/blog-category" element={<Lsit />} />
      <Route path="/blog-category/:id" element={<Edit />} />
      <Route path="/blogs/add" element={<AddBlog />} />
      <Route path="/blogs/:id" element={<EditBlog />} />
      <Route path="/blogs" element={<ListBlog />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
