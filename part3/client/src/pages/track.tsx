import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";
import TrackDetail from "../components/track-detail";


const GET_TRACK = gql(`
query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    description
    numberOfViews
    modules {
      id
      title
      length
    }
  }
}
`);

export default function Track() {
    const { trackId } = useParams();

    const { loading, error, data } = useQuery(GET_TRACK, {
        variables: { trackId }
    });

    return <Layout>

        <QueryResult loading={loading} error={error} data={data}>
            <TrackDetail track={data?.track} />
        </QueryResult>
    </Layout>
}
