declare module "@as-integrations/next" {
  import { ApolloServer } from "@apollo/server";
  import { NextRequest } from "next/server";

  export function startServerAndCreateNextHandler(
    server: ApolloServer,
    options?: {
      context?: (req: NextRequest) => Promise<Record<string, any>>;
    }
  ): (req: NextRequest) => Promise<Response>;
}
