import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState({});
  const {id} = useParams();
  console.log(id);
  useEffect(() => {
    const getPost = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    };
    getPost();
  }, [id]);

  return (
    <div>
      <div>Post</div>
      <h1>{post.title}</h1>
      <h2>{post.body}</h2>
    </div>
  );
};

export default Post;
