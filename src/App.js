import React, { useEffect, useMemo, useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/usePosts";
import PostService from "./components/API/PostSerice";
import MyLoader from "./components/UI/loader/MyLoader";
import { useFetching } from "./components/hooks/useFetching";
import { getArrayPages, getPagesCount } from "./components/util/pages";
import MyPagination from "./components/UI/pagination/MyPagination";


function App() {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [visable, setVisable] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [fetchPosts, isPostsLoading, postsError] = useFetching( async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisable(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  useEffect(()=> {
    fetchPosts()
  }, [page])

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>POSTS</MyButton>
      <MyButton style={{marginTop: '20px'}} onClick = {() => setVisable(true)}>Создать пост</MyButton>
      <MyModal visable={visable} setVisable={setVisable}>
        <PostForm create={createPost}></PostForm>
      </MyModal>
      <hr style={{margin: '15px 0'}}></hr>
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader></MyLoader></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Спиосок постов!"></PostList>
      }
      <MyPagination page={page} totalPages={totalPages} changePage={changePage}></MyPagination>
    </div>
  );
}

export default App;
