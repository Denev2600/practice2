import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlogItems from "../components/BlogItems";

export default function Blog() {
  const [blog, setBlog] = useState([]);

  const getBlogs = async () => {
    axios
      .get("http://localhost:8080/blogs")
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      axios
        .delete(`http://localhost:8080/blogs/${id}`)
        .then((res) => {
          alert("삭제되었습니다.");
          console.log(res);
          getBlogs();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const updateBlog = (id, title, content) => {
    axios
      .put(`http://localhost:8080/blogs/${id}`, { title, content })
      .then((res) => {
        console.log("수정되었습니다.");
        getBlogs();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  console.log(blog);

  return (
    <div>
      <Link to="/blog/create">
        <button>글작성</button>
      </Link>

      {blog.map((data) => (
        <BlogItems
          key={data.id}
          blog={data}
          handleRemove={handleRemove}
          updateBlog={updateBlog}
        />
      ))}
    </div>
  );
}
