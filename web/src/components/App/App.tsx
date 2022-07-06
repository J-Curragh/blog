import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as S from './style';
import usePosts from '../../contexts/usePosts';
import Navbar from '../Navbar/Navbar';
import { NavLink } from '../Navbar/NavLink';
import { Page } from '../Page/Page';
import { Landing } from '../Landing/Landing';

function App() {
  const { fetchRecentPosts } = usePosts();

  useEffect(() => {
    fetchRecentPosts();
  }, [fetchRecentPosts]);

  return (
    <BrowserRouter>
      <S.Screen>
        <Navbar>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">Projects</NavLink>
          <NavLink href="#">Contact</NavLink>
        </Navbar>
        <Page>
          <Routes>
            {/* https://reactrouter.com/docs/en/v6/getting-started/overview */}
            <Route path="/" element={<Landing />}></Route>
          </Routes>
        </Page>
      </S.Screen>
    </BrowserRouter>
  );
}
export default App;
