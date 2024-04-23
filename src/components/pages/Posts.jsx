import React, { useEffect, useMemo, useState } from "react";
import PostList from "../PostList";
import PostForm from "../PostForm";
import PostFilter from "../PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostSerice";
import MyLoader from "../UI/loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import { getArrayPages, getPagesCount } from "../util/pages";
import MyPagination from "../UI/pagination/MyPagination";
import MySelect from "../UI/select/MySelect";

function Posts() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [visable, setVisable] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(getPagesCount(totalCount, limit));
    });

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

    useEffect(() => {
        fetchPosts();
    }, [page]);

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
            <MySelect
                value={limit}
                onChange={(limit) => setLimit(limit)}
                defoultValue={"Количесвто страниц"}
                options={[
                    { value: 5, name: "5" },
                    { value: 10, name: "10" },
                    { value: 20, name: "20" },
                    { value: -1, name: "Показать все" },
                ]}
            ></MySelect>
            {isPostsLoading ? (
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
                <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title='Список постов!'
                ></PostList>
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
