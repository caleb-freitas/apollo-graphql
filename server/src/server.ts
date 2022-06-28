import {ApolloServer} from 'apollo-server';
import {typeDefs} from './schema';
import {resolvers} from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

server.listen().then(() => {
  console.log(`
    Server is running on port 4000!
    Explore at https://studio.apollographql.com/sandbox
  `);
});
