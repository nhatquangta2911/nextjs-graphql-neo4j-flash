import fs from 'fs';
import path from 'path';
import { makeAugmentedSchema } from 'neo4j-graphql-js';

export const typeDefs = fs
  .readFileSync(
    process.env.GRAPHQL_SCHEMA || path.join(__dirname, 'schema.graphql')
  )
  .toString('utf-8');

export const schema = makeAugmentedSchema({ typeDefs });
