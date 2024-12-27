import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './blog.css';

const BlogFullContent = () => {
    const { id } = useParams();

    const [post, setPost] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:5000/api/blog/post/${id}`).then((response) => {
            response.json().then((posts) => {
                setPost(posts);
            })
        })
    }, [id]);
    return (
        <div>
            <div>
                <Typography variant='h4' className='postTitle'>{post?.title}</Typography>
            </div>
            <div className='imagePost'>
                <img
                    src={post?.image ? `http://localhost:5000/${post?.image}` : "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"}
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                />
            </div>

            <div className='imageContent'>
                {/* <Typography className="imagefullContent">{post?.content}</Typography> */}
                <div className="imagefullContent" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </div>
    )
}

export default BlogFullContent;