import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { Grid } from '@mui/material';

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blog/post').then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      })
    })
  }, [])
  return (
    <>
      <Grid container spacing={3}>
        {
          posts?.length && posts?.map((post) => (
            <Blog post={post} />
          ))
        }
      </Grid>
    </>
  )
}

export default Blogs;