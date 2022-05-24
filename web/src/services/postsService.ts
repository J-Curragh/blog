import axios from 'axios';
import { AllPostsResponse } from '../models';

const getPosts = async () => {
  const response: AllPostsResponse = await axios.get(
    'http://localhost:8080/api/v1/posts'
  );

  return response.data || [];
};

const PostService = {
  getPosts,
};

export default PostService;
