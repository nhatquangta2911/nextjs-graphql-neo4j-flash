//This will match /api/posts/a/b /api/posts/a/b/c, but not /api/posts/a (must be more than 1)
export default (req, res) => {
  const {
    query: { slug },
  } = req;
  const result = slug?.map((item) => ({
    id: slug.indexOf(item) + 1,
    slug: item,
  }));
  res.end(JSON.stringify(result));
};
