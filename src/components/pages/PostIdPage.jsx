import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostSerice";
import MyLoader from "../UI/loader/MyLoader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });

    const [fetchCommentsByIdPost, isCommentsLoading, commentsError] =
        useFetching(async () => {
            const response = await PostService.getCommentsByPostId(params.id);
            setComments(response.data);
        });

    useEffect(() => {
        fetchPostById();
        fetchCommentsByIdPost();
    }, []);

    return (
        <div className='App'>
            <h1>Страница поста c ID = {params.id}</h1>
            {isPostLoading ? (
                <MyLoader></MyLoader>
            ) : (
                <div>
                    <h3>
                        {post.id}. {post.title}
                    </h3>
                    <p>{post.body}</p>
                </div>
            )}
            <h1>Комментарии</h1>
            {comments.map((comm) => (
                <div>
                    <h3>{comm.email}</h3>
                    <div>
                        <h5>{comm.name}</h5>
                        <p>{comm.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostIdPage;
