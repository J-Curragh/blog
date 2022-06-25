import React, { useEffect } from 'react';
import * as S from './style';
import usePosts from '../../contexts/usePosts';
import Navbar from '../Navbar/Navbar';
import { NavLink } from '../Navbar/NavLink';

function App() {
  const { fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <S.Screen>
      <Navbar>
        <NavLink href="#">Knowledge Base</NavLink>
        <NavLink href="#">Projects</NavLink>
        <NavLink href="#">Contact</NavLink>
      </Navbar>
      <S.Fill />
    </S.Screen>

  );
}
export default App;
