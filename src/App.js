import React, { useMemo, useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'fff', body:'ggg'},
    {id:2, title:'aaa', body:'vvv'},
    {id:3, title:'ccc', body:'ddd'},
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    if(selectedSort) {
      return [...posts].sort((a ,b) => a[selectedSort].localeCompare(b[selectedSort]))
    } return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [sortedPosts, searchQuery])

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost}></PostForm>
      <hr style={{margin: '15px 0'}}></hr>
      <MyInput
        placeholder="Поиск..."
        value={searchQuery}
        onChange={e=>setSearchQuery(e.target.value)}
      ></MyInput>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defoultValue="Сортировка"
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}
      ></MySelect>
      {sortedAndSearchedPosts.length !== 0
        ?  <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Спиосок постов!"></PostList>
        :  <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1> 
      }
    </div>
  );
}

export default App;
