import React from 'react';
import * as ReactDOM from 'react-dom/client';

import { PostsProvider } from './contexts/PostsCtxProviderComponent';
import App from './components/App/App';
import Theme from './contexts/ThemeContextProvider';
import GlobalStyle from './components/GlobalStyle';

const root = document.getElementById('root')!;
const container = ReactDOM.createRoot(root);


container.render(
  <React.StrictMode>
    <PostsProvider>
      <Theme>
        <GlobalStyle />
        <App />
      </Theme>
    </PostsProvider>
  </React.StrictMode>
);

