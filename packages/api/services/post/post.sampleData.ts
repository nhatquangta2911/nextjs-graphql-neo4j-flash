import { plainToClass } from "class-transformer";
import Post from "./post.type";

const loadPosts = (): Post[] => {
  return plainToClass(Post, [
    {
      id: 1,
      title: `You don't have to be productive all the time`,
      tags: [
        {
          id: 1,
          name: "English",
        },
        {
          id: 2,
          name: "Productivity",
        },
      ],
      content: `Update soon`,
      coverImage:
        "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      slug: `you-dont-have-to-be-productive-all-the-time`,
    },
    {
      id: 2,
      title: `Get into new habits quickly`,
      tags: [
        {
          id: 4,
          name: "Habits",
        },
        {
          id: 2,
          name: "Productivity",
        },
      ],
      content: `Update soon`,
      coverImage:
        "https://skywell.software/wp-content/uploads/2019/06/what-is-ui-ux-design-1024x417.jpg",

      slug: `get-into-new-habits-quickly`,
    },
    {
      id: 3,
      title: `Post Random A`,
      tags: [
        {
          id: 4,
          name: "Habits",
        },
        {
          id: 2,
          name: "Productivity",
        },
      ],
      content: `Update soon`,
      coverImage:
        "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

      slug: `post-random-a`,
    },
    {
      id: 4,
      title: `Post Random B`,
      tags: [
        {
          id: 4,
          name: "Habits",
        },
        {
          id: 2,
          name: "Productivity",
        },
      ],
      content: `Update soon`,
      coverImage:
        "https://skywell.software/wp-content/uploads/2019/06/what-is-ui-ux-design-1024x417.jpg",

      slug: `post-random-b`,
    },
  ]);
};

export default loadPosts;
