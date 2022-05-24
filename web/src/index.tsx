import React from 'react';
import * as ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { PostsProvider } from './contexts/PostsCtxProviderComponent';
import { ThemeProvider } from 'styled-components';
import { ThemeColour, ThemeColours } from './constants/Colors';

// const theme: ThemeColour = ThemeColours["Rose Pine Light"]
const theme: ThemeColour = ThemeColours['Seafoam Dark'];

const root = document.getElementById('root')!;
const container = ReactDOM.createRoot(root);

container.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PostsProvider>
        <App />
      </PostsProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
