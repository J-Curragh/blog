import React, { useEffect, useState } from 'react';
import * as SC from './style';
import usePosts from '../../contexts/usePosts';
import Search from '../Search';
import Posts from '../Posts/Posts';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ThemeContext from '../../contexts/ThemeContext';
import { ThemeProvider } from 'styled-components';
import { ThemeColour, ThemeColours } from '../../constants/Colors';

function App() {
  const { isLoading, posts, fetchPosts } = usePosts();
  const [currentTheme, setCurrentTheme] = useState<ThemeColour>(
    ThemeColours['Seafoam Dark']
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={currentTheme}>
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
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default App;
