import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [],
  fastRefresh: {},
  antd: false,
  helmet: false,
  request: false,
  model: false,
  initialState: false,
  // crossorigin: false,
  // polyfill: false,
});
