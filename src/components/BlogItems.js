import React, { useState } from "react";

export default function BlogItems({ blog, handleRemove, updateBlog }) {
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [update, setUpdate] = useState(true);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const updatePost = () => {
    if (title === "" || content === "") {
      alert("제목이나 내용이 없습니다.");
      return;
    }
    updateBlog(blog.id, title, content);
    setUpdate(true);
  };

  const updateFunction = (e) => {
    e.preventDefault();
    if (window.confirm("수정하시겠습니까?") === false) {
      return;
    }
    updatePost(blog.id, title, content);
  };

  const handleEdit = () => {
    setUpdate(!update);
  };

  return (
    <div>
      {update ? (
        <div className="detail">
          <h1>제목 : {blog.title} </h1>
          <h3>내용 : {blog.content} </h3>
          <p>작성자: {blog.id} </p>
          <button
            onClick={() => {
              handleRemove(blog.id);
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              handleEdit();
            }}
          >
            수정
          </button>
        </div>
      ) : (
        <div className="add">
          <h2>글 추가하기</h2>
          <form>
            <input type="text" onChange={handleTitle} value={title} /> <br />
            <textarea onChange={handleContent} value={content} /> <br />
            <button type="submit" onClick={updateFunction}>
              수정하기
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
                setTitle(blog.title);
                setContent(blog.content);
                setUpdate(true);
              }}
            >
              취소하기
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
