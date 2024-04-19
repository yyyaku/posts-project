import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
    // Link делает статичный URL
    // объект useNavigate - динамическая навигация, чтобы для каждого поста была своя ссылка
    const navigate = useNavigate();

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>
                    {props.post.id} {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className='post__buttons'>
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
