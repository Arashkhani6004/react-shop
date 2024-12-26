import { useState } from "react";
import { Link } from "react-router";
import styles from "./Layout.module.css";
import { CaretDownOutlined } from "@ant-design/icons";

function Layout({ children }) {
  const [openDropDown, setOpenDropDown] = useState(null);

  const accordionHandler = (index) => {
    setOpenDropDown(openDropDown === index ? null : index);
  };
  const menuItems = [
    {
      name: "Blog Category",
      children: [
        { name: "Add", link: "/blog-category/add" },
        { name: "List", link: "/blog-category" },
      ],
    },
    {
      name: "Blogs",
      children: [
        { name: "Add", link: "/blogs/add" },
        { name: "List", link: "/blogs" },
      ],
    },
    {
      name: "Product Category",
      children: [
        { name: "Add", link: "/product-category/add" },
        { name: "List", link: "/product-category" },
      ],
    },
    {
      name: "Products",
      children: [
        { name: "Add", link: "/products/add" },
        { name: "List", link: "/products" },
      ],
    },
  ];
  return (
    <div className="flex flex-row min-h-screen">
      <div className="bg-sky-400 basis-1/6 p-3 rounded-md">
        <ul>
          <li className="p-2 my-1 bg-sky-200 border-l-4 border-sky-700">
            <Link to="/">Dashboard</Link>
          </li>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="p-2 my-1 bg-sky-200 border-l-4 border-sky-700"
            >
              <button
                onClick={() => accordionHandler(index)}
                className="flex gap-4 items-center w-full"
              >
                <span className="block">{item.name}</span>
                <CaretDownOutlined
                  rotate={openDropDown === index ? "180" : "0"}
                  style={{ fontSize: "14px" }}
                />
              </button>
              <div key={item.name}
                className={` mt-2 ${styles.collapseBody} ${
                  openDropDown === index ? styles.show : null
                }`}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.index}
                    to={child.link}
                    className="block px-3 py-1 bg-sky-400 mb-1"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white basis-5/6 p-3">{children}</div>
    </div>
  );
}

export default Layout;
