export interface Post {
  id: number;
  title: string;
  header: string;
  tags: [Tag];
  body: string;
  coverImage: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}
