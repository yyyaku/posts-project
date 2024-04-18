import React from "react";
import './styles/App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Posts from "./components/pages/Posts";
import About from "./components/pages/About";



function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>
           <Route path="posts" element={<Posts />}/>
           <Route path="about" element={<About />}/>  
           {/* <Route path="*" element={<Error />}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
