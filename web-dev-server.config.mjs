import { hmrPlugin, presets } from '@open-wc/dev-server-hmr'
import { esbuildPlugin } from '@web/dev-server-esbuild'
import { fromRollup } from '@web/dev-server-rollup';

import litcss from 'rollup-plugin-lit-css'

export default {
  nodeResolve: true,
  mimeTypes: {
    '**/*.css': 'js',
  },
  plugins: [
    fromRollup(litcss)({ include: [ './src/**/*.css' ] }),
    esbuildPlugin({ ts: true }),
    hmrPlugin({
      include: ['src/**/*'],
      presets: [presets.litElement],
    })
  ],
};