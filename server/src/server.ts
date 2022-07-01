import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { resolvers } from '../prisma/generated/type-graphql';
import { PrismaClient } from '@prisma/client';

async function main() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });
  const { port } = await server.listen(4000);
  console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);