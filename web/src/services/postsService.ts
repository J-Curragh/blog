import axios from 'axios';
import { AllPostsResponse } from '../types';

const getPosts = async (recent = false, page = 0, pageSize = 20) => {
  let params = '';

  if (recent) {
    params = params.concat('?recent');
  } else if (page) {
    params = params.concat(`?page=${page}&limit=${pageSize}`);
  }

  const response: AllPostsResponse = await axios.get(
    'http://localhost:8080/api/v1/posts'.concat(params)
  );

  return response.data || [];
};

const PostService = {
  getPosts,
};

export default PostService;
