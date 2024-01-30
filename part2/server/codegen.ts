import { CodegenConfig, generate } from "npm:@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/__generated__/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../context.ts#DataSourcesContext",
        mappers: {
          Track: '../models.ts#TrackModel',
          Author: "../models.ts#AuthorModel"
        }
      }
    },
  },
};
generate(config);

export default config;
