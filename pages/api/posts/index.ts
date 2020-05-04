export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      totalPosts: 100,
      description: "The post content will be uploaded soon ",
    })
  );
};
