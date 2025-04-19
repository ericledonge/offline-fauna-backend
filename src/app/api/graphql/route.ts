import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs, resolvers } from "@/graphql/schema";
import { NextRequest } from "next/server";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest) => ({ req }),
});

export { handler as GET, handler as POST };
