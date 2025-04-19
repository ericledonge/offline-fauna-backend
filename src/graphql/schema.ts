import { gql } from "graphql-tag";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const typeDefs = gql`
  type Observation {
    id: ID!
    faunaId: String!
    description: String!
    createdAt: String!
  }

  type Fauna {
    id: ID!
    name: String!
    icon: String!
  }

  input ObservationInput {
    faunaId: String!
    description: String!
  }

  type Query {
    allFaunaDetails: [Fauna!]!
  }

  type Mutation {
    addObservation(input: ObservationInput!): Observation!
  }
`;

export const resolvers = {
  Query: {
    allFaunaDetails: async () => {
      return await prisma.fauna.findMany();
    },
  },
  Mutation: {
    addObservation: async (
      _parent: unknown,
      { input }: { input: { faunaId: string; description: string } }
    ) => {
      return await prisma.observation.create({
        data: {
          faunaId: input.faunaId,
          description: input.description,
        },
      });
    },
  },
};
