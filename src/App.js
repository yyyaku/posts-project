import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'JS', body:'JS - язык програмирования'},
    {id:2, title:'JS 2', body:'JS - язык програмирования'},
    {id:3, title:'JS 3', body:'JS - язык програмирования'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // Получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <PostList remove={removePost} posts={posts} title="Спиосок постов 1"></PostList>
    </div>
  );
}

export default App;
