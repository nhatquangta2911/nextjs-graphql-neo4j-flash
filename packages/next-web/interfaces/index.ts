export interface Post {
  id: number;
  title: string;
  tags: [Tag];
  content: string;
  coverImage: string;
  slug: string;
}

export interface Tag {
  id: number;
  name: string;
}
