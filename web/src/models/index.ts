export interface Post {
  id: number,
  title: string;
  content: string;
  created: string;
}

export interface AllPostsResponse {
  data: Post[]
}