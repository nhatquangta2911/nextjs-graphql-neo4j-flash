export default (req, res) => {
  const {
    query: { id },
  } = req;
  res.end(JSON.stringify({ id, title: "All the titles are the same" }));
};
