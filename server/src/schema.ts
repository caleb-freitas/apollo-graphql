import { CreateUserResolver, resolvers, User } from '../prisma/generated/type-graphql'
import { buildSchema } from "type-graphql"

export const schema = buildSchema({
  resolvers: [
    CreateUserResolver,
    User,
  ],

  emitSchemaFile: true,
})
