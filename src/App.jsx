import { Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import BlogDetail from "./Pages/BlogDetail";
import Cards from "./Components/Cards";
import Header from './Components/Header'

function App() {
  return (
    <div className="p-4">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog-detail/:id" element={<BlogDetail/>}/>

      </Routes>
    </div>
  );
}

export default App;
