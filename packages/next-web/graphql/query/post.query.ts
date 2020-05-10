import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query getPosts($slug: String!) {
    relatedPosts(slug: $slug) {
      id
      title
      content
      coverImage
      slug
    }
  }
`;
