import Tag from "./tag.type";
import { plainToClass } from "class-transformer";

const loadTags = (): Tag[] => {
  return plainToClass(Tag, [
    {
      id: 1,
      name: "Front-end",
    },
    {
      id: 2,
      name: "Back-end",
    },
    {
      id: 3,
      name: "Tech",
    },
    {
      id: 4,
      name: "English",
    },
    {
      id: 5,
      name: "Productivity",
    },
    {
      id: 6,
      name: "Health",
    },
    {
      id: 7,
      name: "Habits",
    },
  ]);
};

export default loadTags;
