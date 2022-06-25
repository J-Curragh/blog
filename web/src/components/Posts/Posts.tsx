import { Post } from '../../types';
import { Grid } from './style';
import PostPreview from './PostPreview';

interface Props {
  posts: Post[];
}

const Posts = ({ posts }: Props) => {
  return (
    <Grid>
      {posts?.map((p) => (
        <PostPreview post={p} key={p.id} />
      ))}
    </Grid>
  );
};

export default Posts;
