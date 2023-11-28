import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';

const Blog = (post) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/dashboard/blogs/${id}`);
    };
    return (
        <>
            <Grid item xs={4}>
                <Card>
                    <div>
                        <Typography level="title-lg">{post?.post?.title}</Typography>
                        <Typography level="body-sm">{post?.post?.summary}</Typography>
                        <IconButton
                            aria-label="bookmark Bahamas Islands"
                            variant="plain"
                            color="neutral"
                            size="sm"
                            sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                        >
                            <BookmarkAdd />
                        </IconButton>
                    </div>
                    <AspectRatio minHeight="120px" maxHeight="200px">
                        <img
                            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent orientation="horizontal">
                        <div>
                            <Typography fontSize="lg" fontWeight="lg">
                                {moment(post?.post?.createdAt).format("DD/MM/YYYY")}
                            </Typography>
                        </div>
                        <Button
                            variant="solid"
                            size="md"
                            color="primary"
                            aria-label="Explore Bahamas Islands"
                            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                            onClick={() => handleClick(post?.post?._id)}
                        >
                            Explore
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default Blog;