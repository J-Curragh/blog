import React from 'react';
import * as ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { PostsProvider } from './contexts/PostsCtxProviderComponent';
import App from './components/App/App';

// const theme: ThemeColour = ThemeColours["Rose Pine Light"]

const root = document.getElementById('root')!;
const container = ReactDOM.createRoot(root);

container.render(
  <React.StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
