import TrackAPI from "./datasources/track-api.ts";

export type DataSourcesContext = {
  dataSources: {
    trackAPI: TrackAPI;
  };
};
