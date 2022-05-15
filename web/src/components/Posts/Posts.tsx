import { Post } from "../../models";
import PostPreview from "./PostPreview";
import './Posts.css';

interface Props {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <div className="posts-grid">
      {posts?.map(p => <PostPreview post={p} key={p.id}/> )}
    </div>
  )
}

export default Posts;