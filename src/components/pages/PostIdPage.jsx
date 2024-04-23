import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostSerice";
import MyLoader from "../UI/loader/MyLoader";
import Comments from "../UI/comments/Comments";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});

    const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostById();
    }, []);

    return (
        <div className='App'>
            <h1>Страница поста c ID = {params.id}</h1>
            {isPostLoading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                    }}
                >
                    <MyLoader></MyLoader>
                </div>
            ) : (
                <div>
                    <h3>
                        {post.id}. {post.title}
                    </h3>
                    <p>{post.body}</p>
                </div>
            )}
            <Comments></Comments>
        </div>
    );
};

export default PostIdPage;
