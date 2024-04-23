import React, { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import PostService from "../../API/PostSerice";
import { useParams } from "react-router-dom";
import MyLoader from "../loader/MyLoader";
import cl from "./Comments.module.css";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const params = useParams();

    const [fetchCommentsByIdPost, isCommentsLoading, commentsError] =
        useFetching(async () => {
            const response = await PostService.getCommentsByPostId(params.id);
            setComments(response.data);
        });

    useEffect(() => {
        fetchCommentsByIdPost();
    }, []);

    return (
        <div className={cl.comments}>
            <h1>Комментарии</h1>
            {isCommentsLoading ? (
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
                comments.map((comm) => (
                    <div key={comm.id}>
                        <h3>{comm.email}</h3>
                        <div>
                            <h5>{comm.name}</h5>
                            <p>{comm.body}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Comments;
