import React from 'react';
import fetch from 'node-fetch';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Button } from '@progress/kendo-react-buttons';
import { useRouter } from 'next/router';
import Head from 'next/head';

const PostDetailPage = ({ post }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <p>ID: {post?.id || 'Unknown'}</p>
      <p>Title: {post?.title || 'Unknown'}</p>
      <p>Content: {post?.body || 'Unknown'}</p>
      <Button
        onClick={() =>
          router.push('/posts/[id]', `/posts/${post?.id ? post.id + 1 : 0}`)
        }
      >
        Next
      </Button>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();
  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();
  return {
    props: { post },
  };
};

export default PostDetailPage;
