import { RESTDataSource } from "npm:@apollo/datasource-rest";
import { AuthorModel, ModuleModel, TrackModel } from "../models.ts";

export class TrackAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }

  getTrack(trackId: string) {
    return this.get<TrackModel>(`track/${trackId}`);
  }

  getTrackModules(trackId: string) {
    return this.get<ModuleModel[]>(`track/${trackId}/modules`);
  }

  getModule(moduleId: string) {
    return this.get<ModuleModel>(`module/${moduleId}`);
  }

  incrementTrackViews(trackId: string) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }
}
