import { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../../types';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '0.1kb',
    },
  },
};

//This will match /api/posts/a/b /api/posts/a/b/c, but not /api/posts/a (must be more than 1)
export default (req: NextApiRequest, res: NextApiResponse<Post[]>) => {
  const {
    query: { slug },
  } = req;
  const result =
    Array.isArray(slug) &&
    slug.map(
      (item) =>
        ({
          id: slug.indexOf(item) + 1,
          slug: item,
        } as Post)
    );
  res.status(200).json(result);
};
