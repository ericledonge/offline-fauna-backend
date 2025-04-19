import { DocumentNode } from "graphql";
import { IResolvers } from "@graphql-tools/utils";

declare module "@/app/graphql/schema" {
  export const typeDefs: DocumentNode;
  export const resolvers: IResolvers;
}
