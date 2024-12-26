import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { Grid } from '@mui/material';

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("authUser"));

    fetch('http://localhost:5000/api/blog/post', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <Grid container spacing={3}>
      {
        posts?.length && posts?.map((post) => (
          <Blog post={post} />
        ))
      }
    </Grid>
  )
}

export default Blogs;