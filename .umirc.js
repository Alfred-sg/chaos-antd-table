import path from 'path';

export default {
  outputPath: 'site',
  mode: 'site',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ]
  ],
  resolve: {
    includes: ['docs'],
  },
  alias: {
    'chaos-antd-table': path.resolve(__dirname, 'src'),
  },
  // umi3 comple node_modules by default, could be disable
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
};
