import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BlogCreate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const addBlog = () => {
    if (window.confirm("글을 게시하겠습니까?")) {
      axios
        .post("http://localhost:8080/blogs", { title, content })
        .then((res) => {
          console.log(res);
          setTitle("");
          setContent("");
          navigate("/blog");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const addFunction = (e) => {
    e.preventDefault();
    if (content === "" || title === "") {
      window.alert("제목 혹은 내용이 비어있습니다.");
    } else {
      addBlog();
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <div className="add">
        <h2>글 추가하기</h2>
        <form>
          <input
            type="text"
            placeholder="제목"
            onChange={handleTitle}
            value={title}
          />{" "}
          <br />
          <textarea
            placeholder="내용"
            onChange={handleContent}
            value={content}
          />{" "}
          <br />
          <button type="submit" onClick={addFunction}>
            글 추가하기
          </button>
          <button
            type="reset"
            onClick={() => {
              setTitle("");
              setContent("");
            }}
          >
            재작성
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/blog");
            }}
          >
            취소하기
          </button>
        </form>
      </div>
    </div>
  );
}
