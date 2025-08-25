import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import About from './components/About/about.jsx';
import Contact from './components/Contact/contact.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import SinglePost from './components/MiniFunctions/singlePost.jsx';
import Portfolio from './components/Portfolio/portfolio.jsx';
import BlogList from './components/MiniFunctions/blogList.jsx';
import Home from './components/Home/Home.jsx';
import MiniFunctions from './components/MiniFunctions/minifunctions.jsx';
import Projects from './components/Projects/projects.jsx';
import GoTop from './components/Props/GoTop.jsx';
import ScrollToTop from './components/ScrollToTop.js';
import ProjectsDetails from './components/Projects/ProjectsDetails.jsx';
import Blob from './components/Blob/blob.jsx';

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Extract the access token from the URL on page load if available
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("access_token");
    if (token) {
      setAccessToken(token);
      fetchPosts(token);
    }
  }, []);

  const fetchPosts = async (token) => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts?access_token=${token}`);
      const data = await response.json();
      setPosts(data.elements || []);
    } catch (error) {
      console.error("Error fetching LinkedIn posts:", error);
    }
  };

  const handleLinkedInLogin = () => {
    // Redirect to the LinkedIn authorization URL
    window.location.href = "http://localhost:5000/auth/linkedin";
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <GoTop />
        <Blob />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/minifunctions" element={<MiniFunctions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts/:id" element={<SinglePost />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projectdetails/:id" element={<ProjectsDetails />} />
            <Route 
              path="/linkedin-posts" 
              element={
                <div>
                  <h2>LinkedIn Recent Posts</h2>
                  {!accessToken ? (
                    <button onClick={handleLinkedInLogin}>Login with LinkedIn</button>
                  ) : (
                    <div>
                      {posts.length > 0 ? (
                        <ul>
                          {posts.map((post, index) => (
                            <li key={index}>
                              <p>{post.text}</p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No recent posts available.</p>
                      )}
                    </div>
                  )}
                </div>
              } 
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;