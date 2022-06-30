export interface WindowSpec {
  width: number;
  height: number;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  created: string;
  topics: Topic[];
}

export interface AllPostsResponse {
  data: Post[];
}

export interface Topic {
  id: number;
  name: string;
}

export interface Colour {
  label: string;
  value: string;
}

export interface TSocial {
  title: string;
  uri: string;
}

