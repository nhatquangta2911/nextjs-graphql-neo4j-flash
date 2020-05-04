import Tag from "../tag/tag.type";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export default class Post {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => [Tag], { nullable: true })
  tags: Tag[];

  @Field({
    nullable: true,
    defaultValue:
      "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  })
  coverImage: string;

  @Field()
  content: string;

  @Field()
  slug: string;
}
