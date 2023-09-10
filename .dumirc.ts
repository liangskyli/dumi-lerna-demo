import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  title: 'dumi-lerna-demo',
  apiParser: {},
  resolve: {
    atomDirs: [
      { type: 'demo1', dir: 'packages/demo1/src' },
      { type: 'demo1', dir: 'packages/demo1/src/utils' },
      { type: 'demo2', dir: 'packages/demo2/src' },
    ],
    entryFile: './.dumi/resolve-entry.ts',
  },
  alias: {
    '@liangskyli/demo1': path.join(__dirname, 'packages/demo1/src'),
    '@liangskyli/demo2': path.join(__dirname, 'packages/demo2/src'),
  },
  themeConfig: {
    name: 'demo',
    footer: 'Open-source MIT Licensed | Copyright © 2023-present',
    socialLinks: {
      github: 'https://github.com/liangskyli/dumi-lerna-demo',
    },
  },
  monorepoRedirect: {
    srcDir: ['src'],
    peerDeps: true,
  },
});
