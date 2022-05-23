import * as SC from "./style";
import { Post } from "../../models";
import Date from "./Date";
import TagsList from "../Tags/TagsList";

interface Props {
  post: Post
}

const PostPreview = ({ post }: Props) => {
  const {
    title,
    content,
    created,
    topics
  } = post;

  const truncatedContent = (content: string) => {
    const firstParagraphEndIndex: number = content.indexOf('\\n')
    if (firstParagraphEndIndex === -1) {
      return content;
    }

    return `${content.substring(0, firstParagraphEndIndex)}...`;
  };

  return (
    <SC.Container >
      <SC.Card>
        <SC.Line>
          <Date date={created} />
          <TagsList tags={topics} />
        </SC.Line>
          <SC.Title>{title}</SC.Title>
          <SC.Info>{truncatedContent(content)}</SC.Info>
      </SC.Card>
    </SC.Container>
  )
}

export default PostPreview