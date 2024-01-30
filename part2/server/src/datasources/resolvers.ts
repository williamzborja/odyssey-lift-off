import { Resolvers } from "../__generated__/types.ts";

export const resolvers: Resolvers = {
  Query: {
    // return an array of tracks that will be used to populate
    // the homepage grid of our web client app
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
