const okrs = [
  {
    id: '0',
    title: 'Improve commits by 7%',
  },
  {
    id: '1',
    title: 'Create two project using graphql',
  },
];

export const resolvers = {
  Query: {
    okrs: () => okrs,
  },
};
