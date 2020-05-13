import "reflect-metadata";
import express, {
  Request,
  Response,
  RequestHandler,
  NextFunction,
} from "express";
import { ApolloServer } from "apollo-server";
import neo4j from "neo4j-driver";
import dotenv from "dotenv";
import { schema, typeDefs } from "./graphql-schema";
dotenv.config();

const loggingMiddleware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("IP:", req.headers.host);
  next();
};

const main = async () => {
  const driver = neo4j.driver(
    process.env.NEO4J_URL || "bolt://localhost:7687",
    neo4j.auth.basic(
      process.env.NEO4J_USERNAME || "neo4j",
      process.env.NEO4J_PASSWORD || "neo4j"
    )
  );
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    context: { driver },
  });

  apolloServer.listen().then(({ url }) => {
    console.log(`☑️ ☑️ ☑️  GraphQL API ready at ${url}`);
  });
};

main();
