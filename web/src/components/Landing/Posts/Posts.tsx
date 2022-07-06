import React from 'react';
import * as S from './style';

import usePosts from '../../../contexts/usePosts';
import PostPreview from './PostPreview';

const Posts = (props: {}) => {
  const { posts } = usePosts();

  return (
    <React.Fragment>
      <S.HeadingContainer>
        <h1>Most Recent Blog Posts</h1>
      </S.HeadingContainer>
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </React.Fragment>
  );
};

export default Posts;
