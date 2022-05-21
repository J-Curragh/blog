import { Post } from "../../models";
import './Posts.css';
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
  }

  const formattedDate = (date: string) => {
    return date.substring(0, date.indexOf('T'));
  }

  return (
    <div className="post-preview-card-container">
      <div className="post-preview-card">
        <div className="post-preview-info">
          <div className="post-preview-date">
            <a>{formattedDate(created)}</a>
          </div>
          <TagsList tags={topics} />
        </div>
        <div className="post-preview-title">
          <a>{title}</a>
        </div>
        <div className="post-preview-content">
          <p>{truncatedContent(content)}</p>
        </div>
      </div>
    </div>
  )
}

export default PostPreview