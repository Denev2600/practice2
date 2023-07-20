import React, { useState } from "react";

export default function PersonalExam() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [lnumber, setLnumber] = useState(0);
  const [dnumber, setDnumber] = useState(0);

  const writeTitle = (e) => {
    setTitle(e.target.value);
  };

  const writeDetail = (e) => {
    setDetail(e.target.value);
  };

  const post = () => {
    alert("게시되었습니다.");
    setTitle("");
    setDetail("");
    setLnumber(0);
    setDnumber(0);
  };

  const clear = () => {
    setTitle("");
    setDetail("");
    setLnumber(0);
    setDnumber(0);
  };

  const like = () => {
    setLnumber(lnumber + 1);
  };

  const dislike = () => {
    setDnumber(dnumber + 1);
  };

  const uploadFile = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <div>
      <h1>Post</h1>
      <div>
        <input value={title} onChange={writeTitle} className="pex"></input>
      </div>
      <div>
        <textarea
          value={detail}
          onChange={writeDetail}
          className="pexd"
        ></textarea>
      </div>
      <div>
        <input
          type="file"
          accept="image/jpg, image/png, image/jpeg"
          onChange={uploadFile}
        ></input>
      </div>
      <button onClick={post}> 게시 </button>
      <button onClick={clear}> 초기화 </button>
      <button onClick={like}>👍{lnumber}</button>
      <button onClick={dislike}>👎{dnumber}</button>
    </div>
  );
}
