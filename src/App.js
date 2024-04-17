import React, { useMemo, useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'fff', body:'ggg'},
    {id:2, title:'aaa', body:'vvv'},
    {id:3, title:'ccc', body:'ddd'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [visable, setVisable] = useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisable(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a ,b) => a[filter.sort].localeCompare(b[filter.sort]))
    } return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [sortedPosts, filter.query])

  return (
    <div className="App">
      <MyButton style={{marginTop: '20px'}} onClick = {() => setVisable(true)}>Создать пост</MyButton>
      <MyModal visable={visable} setVisable={setVisable}>
        <PostForm create={createPost}></PostForm>
      </MyModal>
      <hr style={{margin: '15px 0'}}></hr>
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Спиосок постов!"></PostList>
    </div>
  );
}

export default App;
