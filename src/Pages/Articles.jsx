import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import styles from './Articles.module.scss';

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const value = useContext(AppContext)
  console.log(value)

  useEffect(() => {
    const getAllPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then((data) => setPosts(data))
    }
    getAllPosts()
  }, []);

  return (
  <div>
    <h1>{ value.name }</h1>
    {posts.map((post) => (
      <div className={styles.Post} key={post.id}>
        <Link to={`${post.id}`}>{post.title}</Link>
      </div>))}
  </div>
  )
}

export default Articles