import { RESTDataSource } from "npm:@apollo/datasource-rest";
import { AuthorModel, TrackModel } from "../models.ts";

class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  getAuthor(id: string) {
    return this.get<AuthorModel>(`author/${id}`);
  }
}

export default TrackAPI;
