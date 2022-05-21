import React, { useEffect } from 'react';
import './App.css';
import usePosts from "./contexts/usePosts";
import Posts from "./components/Posts/Posts";
import Search from "./components/Search";
import Footer from "./components/Footer/Footer";

function App() {
  const navLinks = ['home', 'knowledge base', 'about'];
  const { isLoading, posts, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="App">
      <div className="content-container">
        <div className="access-bar">
          <h1 className="main-header">jcli</h1>
          <span className="sep">|</span>
          {navLinks.map(link => <span key={link} className="nav-link-title">{link}</span>)}
        </div>
        <main>
          <Search />
          <h1>ARTICLES</h1>
          <Posts posts={posts} />
        </main>
      </div>
      <Footer />
    </div>
);
}

export default App;
