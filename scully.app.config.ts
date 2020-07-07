import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'app',
  outDir: './dist/static',
  routes: {
    '/todos/:id': {
      type: 'json',
      id: {
        url: 'https://jsonplaceholder.typicode.com/todos',
        property: 'id',
      },
    },
  },
};
