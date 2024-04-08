import React, { useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'JS', body:'JS - язык програмирования'},
    {id:2, title:'JS 2', body:'JS - язык програмирования'},
    {id:3, title:'JS 3', body:'JS - язык програмирования'},
  ])

  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Список постов</h1>
      {posts.map(post => 
        <PostItem post={post} key={post.id}></PostItem>
      )}
    </div>
  );
}

export default App;
