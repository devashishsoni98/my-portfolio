import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import NavBar from "./components/Navbar/navbar";
import SinglePost from "./components/MiniFunctions/singlePost";
import Portfolio from "./components/Portfolio/portfolio";
import BlogList from "./components/MiniFunctions/blogList";
import Home from "./components/Home/Home";
import MiniFunctions from "./components/MiniFunctions/minifunctions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/minifunctions" element={<MiniFunctions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
