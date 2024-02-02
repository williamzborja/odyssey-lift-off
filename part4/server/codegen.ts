import {CodegenConfig, generate} from "npm:@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./src/schema.ts",
    generates: {
        "./src/types.ts": {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                contextType: "./context.ts#DataSourceContext",
                mappers: {
                    Track: "./models.ts#TrackModel",
                    Author: "./models.ts#AuthorModel",
                    Module: "./models.ts#ModuleModel",
                },
            },
        },
    },
};

generate(config);

export default config;
