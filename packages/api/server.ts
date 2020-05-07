import "reflect-metadata";
import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
//TODO: !!!
import neo4j from "neo4j-driver";

const app: express.Application = express();
const path = "/graphql";
const PORT = process.env.PORT || 4000;

const loggingMiddleware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("IP:", req.headers.host);
  next();
};

const main = async () => {
  const schema = await buildSchema({
    resolvers: [__dirname + "/**/*.resolver.ts"],
  });
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    context: ({ req }) => {
      console.log(req.connection.remoteAddress?.split("f:")[1]);
    },
  });
  apolloServer.applyMiddleware({ app, path });

  app.listen(PORT, () => {
    console.log(`☑️ ☑️ ☑️  started http://localhost:${PORT}${path}`);
  });
};

main();
