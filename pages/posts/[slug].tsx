import React from 'react';
import { useRouter } from 'next/router';

const PostDetailPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <p>Post: {slug}</p>
    </>
  );
};

export default PostDetailPage;
