import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Header from "./components/Header";
import BlogCreate from "./pages/BlogCreate";
import Menu from "./pages/Menu";
import Travel from "./pages/Travel";
import Basket from "./pages/Basket";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/blog/create" exact element={<BlogCreate />} />
            <Route path="/menu" exact element={<Menu />} />
            <Route path="/travel" exact element={<Travel />} />
            <Route path="/basket" exact element={<Basket />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
