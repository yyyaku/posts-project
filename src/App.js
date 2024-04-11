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
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault()
    // Создаем новый объект
    // Созданый новый объект добавляем в массив постов:
    // для этого мы не изменяем состояние напрямую - вызываем функцию setPosts,
    // куда передаем новый массив = разворачиваем старый массив(...posts) и добавляем новый пост(newPost)
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Название поста">
        </MyInput>
        {/* Неуправляемый/неконтролируемый компонент */}
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
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
