import { defineConfig } from 'orval';

export default defineConfig({
  myApi: {
    input: 'https://localhost:7021/openapi/v1.json',
    output: {
      mode: 'tags-split',        // one file per controller tag
      target: './src/api',
      client: 'react-query',
      baseUrl: {
        runtime: 'import.meta.env.VITE_API_BASE_URL',
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});