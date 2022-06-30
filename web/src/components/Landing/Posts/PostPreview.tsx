import React from 'react';
import * as S from './style';
import { Post } from '../../../types';

interface PostPreviewProps {
  post: Post;
}

const PostPreview = ({ post }: PostPreviewProps) => {
  // Get the first paragraph of the post's content.
  const preview = (text: string) => {
    const paragraphEndIndex = text.indexOf('\\n');
    return text.slice(0, paragraphEndIndex);
  };

  // Format the date from Universal API Format to a more friendly one.
  const formatDate = (date: string) => {
    const delimeter = date.indexOf('T');
    return date.slice(0, delimeter);
  };

  return (
    <S.PostBlock>
      <span>{formatDate(post.created)}</span>
      <S.Title>{post.title}</S.Title>
      <S.PreviewBody>{preview(post.content)}</S.PreviewBody>
    </S.PostBlock>
  );
};

export default PostPreview;
