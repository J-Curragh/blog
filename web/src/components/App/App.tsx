import React, { useEffect } from 'react';

import usePosts from '../../contexts/usePosts';

import * as SC from './style';
import Posts from '../Posts/Posts';
import Search from '../Search';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function App() {
  const navLinks = ['home', 'knowledge base', 'about'];
  const { isLoading, posts, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <SC.Wrapper>
      <SC.Screen>
        <SC.Row>
          <Navbar />
        </SC.Row>
        <SC.Container>
          <Search />
          <h1>ARTICLES</h1>
          <Posts posts={posts} />
        </SC.Container>
      </SC.Screen>
      <Footer />
    </SC.Wrapper>
  );
}

export default App;
