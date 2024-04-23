import React, { useEffect, useRef, useState } from "react";
import PostList from "../PostList";
import PostForm from "../PostForm";
import PostFilter from "../PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostSerice";
import MyLoader from "../UI/loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../util/pages";
import MyPagination from "../UI/pagination/MyPagination";

function Posts() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [visable, setVisable] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();
    const observer = useRef();
    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(getPagesCount(totalCount, limit));
    });

    useEffect(() => {
        if (isPostsLoading) return;
        if (observer.current) observer.current.disconnect();
        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && page < totalPages) {
                    setPage(page + 1);
                }
            });
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current);
    }, [isPostsLoading]);

    useEffect(() => {
        fetchPosts();
    }, [page, limit]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setVisable(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
    };

    return (
        <div className='App'>
            <MyButton
                style={{ marginTop: "20px" }}
                onClick={() => setVisable(true)}
            >
                Создать пост
            </MyButton>
            <MyModal visable={visable} setVisable={setVisable}>
                <PostForm create={createPost}></PostForm>
            </MyModal>
            <hr style={{ margin: "15px 0" }}></hr>
            <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title='Список постов!'
            ></PostList>
            <div
                ref={lastElement}
                style={{ margin: "15px 0", height: "20px", background: "red" }}
            ></div>
            {isPostsLoading && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                    }}
                >
                    <MyLoader></MyLoader>
                </div>
            )}
            {postsError && <h1>Ошибка при загрузке данных!!! &{postsError}</h1>}
            <MyPagination
                page={page}
                totalPages={totalPages}
                changePage={changePage}
            ></MyPagination>
        </div>
    );
}

export default Posts;
