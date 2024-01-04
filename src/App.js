import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import NavBar from "./components/Navbar/navbar";
import SinglePost from "./components/MiniFunctions/singlePost";
import Portfolio from "./components/Portfolio/portfolio";
import BlogList from "./components/MiniFunctions/blogList";
import Home from "./components/Home/Home";
import MiniFunctions from "./components/MiniFunctions/minifunctions";
import Projects from "./components/Projects/projects";
import GoTop from "./components/Props/GoTop";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetails from "./components/Projects/ProjectsDetails";
import { useState, useEffect } from "react";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <NavBar />
        <GoTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/minifunctions" element={<MiniFunctions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectdetails/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
