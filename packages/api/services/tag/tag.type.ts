import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export default class Tag {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;
}
