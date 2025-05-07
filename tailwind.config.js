/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/layouts/Layout.jsx",
    "./src/pages/auth/LoginPage.jsx",
    "./src/pages/blog-category/Add.jsx",
    "./src/pages/blog-category/Edit.jsx",
    "./src/components/blog-category/Form.jsx",
    "./src/components/blogs/Blogform.jsx",
    "./src/components/shared/ImageFile.jsx",
    "./src/pages/blog-category/Lsit.jsx",
    "./src/pages/blogs/AddBlog.jsx",
    "./src/pages/blogs/ListBlog.jsx",
    "./src/pages/blogs/EditBlog.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
