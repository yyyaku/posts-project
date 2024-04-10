import React, { useRef, useState } from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'JS', body:'JS - язык програмирования'},
    {id:2, title:'JS 2', body:'JS - язык програмирования'},
    {id:3, title:'JS 3', body:'JS - язык програмирования'},
  ])

  const [title, setTitle] = useState('')
  const refMyInput = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(refMyInput.current.value)
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста">
        </MyInput>
        {/* Неуправляемый/неконтролируемый компонент */}
        <MyInput
          ref={refMyInput}
          type="text"
          placeholder="Описание поста">
        </MyInput>
        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
      <PostList posts={posts} title="Спиосок постов 1"></PostList>
    </div>
  );
}

export default App;
