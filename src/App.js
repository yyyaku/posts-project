import React from "react";
import './styles/App.css'
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/UI/Nav/Nav";
import AppRouter from "./components/AppRouter";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  )
}

export default App;
