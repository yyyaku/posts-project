import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'fff', body:'ggg'},
    {id:2, title:'aaa', body:'vvv'},
    {id:3, title:'ccc', body:'ddd'},
  ])

  const [sortedSort, setSortedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // Получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  // После того, как пользователь выбрал алгоритм сортировки, нам нужно отсоритровать массив
  // тут sort выбранный механизм сортировки - если вывести в лог, то получим title или body при выборе названия сортировки
  const sortPosts = (sort) => {
    // вызываем функцию setSortedSort, чтобы передать туда то, что приходит к нам из самого selecta - ту опцию, которую выбрали
    setSortedSort(sort)
    // вызываем функцию setPosts, чтобы передать отсортированный массив
    setPosts([...posts].sort((a ,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <hr style={{margin: '15px 0'}}></hr>
      <MySelect
        value={sortedSort}
        onChange={sortPosts}
        defoultValue="Сортировка"
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}
      ></MySelect>
      {posts.length !== 0
        ?  <PostList remove={removePost} posts={posts} title="Спиосок постов 1"></PostList>
        :  <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1> 
      }
    </div>
  );
}

export default App;
