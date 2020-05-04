import { Resolver, Query, Arg, Int, Mutation } from "type-graphql";
import loadPosts from "./post.sampleData";
import Post from "./post.type";

export class PostResolver {
  private readonly items: Post[] = loadPosts();

  @Query(() => [Post], { description: "Get all posts" })
  async posts(): Promise<Post[]> {
    return await this.items;
  }

  @Query(() => Post)
  async post(@Arg("id", (type) => Int) id: number): Promise<Post | undefined> {
    return await this.items.find((item) => item.id === id);
  }

  @Query(() => [Post])
  async relatedPosts(
    @Arg("slug", (type) => String) slug: string
  ): Promise<Post[]> {
    return await this.items.filter((item) => item.slug === slug);
  }

  @Mutation(() => Post, { description: "Add new post" })
  async addPost(@Arg("postInput") postInput: string): Promise<Post> {
    console.log(postInput);
    return await this.items[0];
  }
}
