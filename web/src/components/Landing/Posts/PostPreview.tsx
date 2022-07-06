import React, { useContext } from 'react';
import * as S from './style';
import { Post } from '../../../types';

import Tag from './Tag';
import { getTagColour } from '../../../utils';
import ThemeContext from '../../../contexts/ThemeContext';

interface PostPreviewProps {
  post: Post;
}

const PostPreview = ({ post }: PostPreviewProps) => {
  const { currentTheme } = useContext(ThemeContext);
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
      <S.Title>
        <h2>{post.title}</h2>
        <S.TagsContainer>
          {post.topics.map((topic) => (
            <Tag
              key={topic.id}
              topic={topic}
              colour={getTagColour(topic.id, currentTheme)}
            ></Tag>
          ))}
        </S.TagsContainer>
      </S.Title>
      <S.PreviewBody>{preview(post.content)}</S.PreviewBody>
    </S.PostBlock>
  );
};

export default PostPreview;
