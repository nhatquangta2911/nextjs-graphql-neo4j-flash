import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import { GetStaticProps, GetStaticPaths } from "next";
import { Button } from "@progress/kendo-react-buttons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardActions,
  CardImage,
  CardSubtitle,
  Avatar,
} from "@progress/kendo-react-layout";
import { useRouter } from "next/router";
import Head from "next/head";
import { withApollo } from "../../helper/apollo";
import { useQuery } from "@apollo/react-hooks";
import { GET_POSTS } from "graphql/query/post.query";

const PostDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, loading, fetchMore } = useQuery(GET_POSTS, {
    variables: { slug: slug || "unknown" },
  });
  const demoPost = data?.relatedPosts[0];
  return (
    <>
      <Head>
        <title>{demoPost?.title}</title>
      </Head>
      <p>ID: {demoPost?.id || "Unknown"}</p>
      <p>Title: {demoPost?.title || "Unknown"}</p>
      <p>Content: {demoPost?.content || "Unknown"}</p>
      <p>Slug: {demoPost?.slug || "Unknown"}</p>
      <img src={demoPost?.coverImage} width={200} />
      {/* <Button onClick={() => router.push("/posts/[slug]", `/posts/${slug}`)}>
        Next
      </Button> */}
    </>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await response.json();
//   const paths = posts.map((post: any) => ({
//     params: { id: post.id.toString() },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );
//   const post = await response.json();
//   return {
//     props: { post },
//   };
// };

export default withApollo(PostDetailPage);
