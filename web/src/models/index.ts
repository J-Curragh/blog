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

export interface Themes {
  Summer: Colour[];
}

export interface Social {
  Github: string;
  Discord: string;
  Twitter: string;
}
