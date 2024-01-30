import {CodegenConfig} from "@graphql-codegen/cli";

const url: string = 'http://localhost:4000';

const config: CodegenConfig = {
    schema: url,
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/__generated__/": {
            preset: 'client',
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
};

export default config;