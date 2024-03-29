import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";

export const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    "Get a track by your id argument"
    track(id: ID!): Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "Track complete description, can be in Markdown Format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiples Modules compose a track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module length in minutes"
    length: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;
